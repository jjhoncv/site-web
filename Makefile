MYSQL_IMAGE		= mysql-siteweb:5.6
development:
	docker build -f docker/mysql/Dockerfile -t ${MYSQL_IMAGE} docker/mysql/

start:
	export MYSQL_IMAGE="$(MYSQL_IMAGE)" && \
		docker-compose up -d

stop:
	export MYSQL_IMAGE="$(MYSQL_IMAGE)" && \
		docker-compose stop

logs:
	export MYSQL_IMAGE="$(MYSQL_IMAGE)" && \
		docker-compose logs -f --tail=10	
# define create_network
# 	$(eval ID_NETWORK := $(shell docker network ls | grep $(NETWORK_NAME) | awk '{print $$1}'))
# 	@if [ ! $(ID_NETWORK) ]; then docker network create $(NETWORK_NAME); fi
# endef

# define network_ip
# 	$(eval MYSQL_HOST := $(shell docker inspect -f '{{range .IPAM.Config}}{{.Gateway}}{{end}}' ${NETWORK_NAME} ))
# endef

# install:
# 	@docker run \
# 		-it \
# 		--rm \
# 		-v $(PWD)/app:/app \
# 		-w /app \
# 		node:11-slim \
# 		npm install
# 	@docker run \
# 		-it \
# 		--rm \
# 		-v $(PWD)/app/src/public/admin:/app \
# 		-w /app \
# 		node:11-slim \
# 		npm install
	

# db:
# 	$(call create_network)
# 	@docker run \
# 		-it \
# 		-d \
# 		--net=${NETWORK_NAME} \
# 		-v $(PWD):/app \
# 		--name siteweb-mysql \
# 		-u 1000:1000 \
# 		-v ${PWD}/mysql/data:/var/lib/mysql \
# 		-p 3306:3306 \
# 		--env-file ./app/.env \
# 		mysql:5.6.40		

# start:
# 	$(call create_network)
# 	$(call network_ip)
# 	@docker run \
# 		-d \
# 		-it \
# 		--rm \
# 		--name siteweb \
# 		--env-file ./app/.env.local \
# 		-u 1000:1000 \
# 		-p 3000:3000 \
# 		--net=${NETWORK_NAME} \
# 		-v $(PWD)/app:/app \
# 		-w /app \
# 		node:11-slim \
# 		npm start
# 	@docker container logs --tail=10

# 	@docker run \
# 		-d \
# 		-it \
# 		--rm \
# 		--name siteweb-admin \
# 		--env-file ./app/.env.local \
# 		-u 1000:1000 \
# 		-p 4000:4000 \
# 		--net=${NETWORK_NAME} \
# 		-v $(PWD)/app/src/public/admin:/app \
# 		-w /app \
# 		node:11-slim \
# 		npm start

build:
	@docker run \
		-it \
		--rm \
		--env-file ./app/.env \
		-u 1000:1000 \
		-v $(PWD)/app:/app \
		-w /app \
		node:11-slim \
		npm run publish
	@cp -r app/.env app/dist
	@cp -r app/package.json app/dist

	@docker run \
		-it \
		--rm \
		--env-file ./app/.env \
		-u 1000:1000 \
		-v $(PWD)/app/src/public/admin:/app \
		-w /app \
		node:11-slim \
		npm run build
	@cp -r $(PWD)/app/src/public/admin/dist app/dist/src/public/admin

build.start:
	@docker run \
		-it \
		--rm \
		-u 1000:1000 \
		-v $(PWD)/app/dist:/app \
		-w /app \
		node:11-slim \
		npm install --production
	@docker run \
		-it \
		--rm \
		--env-file ./app/dist/.env \
		-u 1000:1000 \
		-v $(PWD)/app/dist:/app \
		-w /app \
		node:11-slim \
		npm run prod