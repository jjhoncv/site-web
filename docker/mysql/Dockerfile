FROM mysql:5.6
COPY my.cnf /etc/mysql/my.cnf
RUN usermod -u 1000 mysql
RUN mkdir -p /var/run/mysqld
RUN chmod -R 777 /var/run/mysqld
ADD setup.sql /docker-entrypoint-initdb.d
ADD bd.sql /docker-entrypoint-initdb.d