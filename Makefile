NETWORK_NAME		= siteweb-network

define create_network
	$(eval ID_NETWORK := $(shell docker network ls | grep $(NETWORK_NAME) | awk '{print $$1}'))
	@if [ ! $(ID_NETWORK) ]; then docker network create $(NETWORK_NAME); fi
endef

define network_ip
	$(eval MYSQL_HOST := $(shell docker inspect -f '{{range .IPAM.Config}}{{.Gateway}}{{end}}' ${NETWORK_NAME} ))
endef

install:
	@docker run \
		-it \
		--rm \
		-v $(PWD)/app:/app \
		-w /app \
		node:11-slim \
		npm install
	@docker run \
		-it \
		--rm \
		-v $(PWD)/app/src/public/admin:/app \
		-w /app \
		node:11-slim \
		npm install
	

db:
	$(call create_network)
	@docker run \
		-it \
		-d \
		--net=${NETWORK_NAME} \
		-v $(PWD):/app \
		--name siteweb-mysql \
		-u 1000:1000 \
		-v ${PWD}/mysql/data:/var/lib/mysql \
		-p 3306:3306 \
		--env-file ./app/.env \
		mysql:5.6.40		

start.site:
	$(call create_network)
	$(call network_ip)
	@docker run \
		-d \
		-it \
		--rm \
		--name siteweb \
		--env-file ./app/.env \
		-u 1000:1000 \
		-p 3000:3000 \
		--net=${NETWORK_NAME} \
		-v $(PWD)/app:/app \
		-w /app \
		node:11-slim \
		npm start
	@docker container logs siteweb -f --tail=10

start.admin:
	$(call create_network)
	$(call network_ip)
	@docker run \
		-d \
		-it \
		--rm \
		--name siteweb-admin \
		--env-file ./app/.env \
		-u 1000:1000 \
		-p 4000:4000 \
		--net=${NETWORK_NAME} \
		-v $(PWD)/app/src/public/admin:/app \
		-w /app \
		node:11-slim \
		npm start
	@docker container logs siteweb-admin -f --tail=10


build:
	@docker run \
		-it \
		--rm \
		--env-file ./app/.env \
		-u 1000:1000 \
		-v $(PWD)/app/src/public/admin:/app \
		-w /app \
		node:11-slim \
		npm run build

logs:
	@docker container logs -f --tail=10

stop:	
	@docker stop siteweb
	@docker stop siteweb-admin