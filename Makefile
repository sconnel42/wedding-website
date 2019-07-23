setup: build
	docker network create wedding-net
	docker-compose -p wedding -f deploy/docker-compose.yaml up -d
	npm install
	sh ${PROJECT_ROOT}/scripts/createdb.sh
	${PROJECT_ROOT}/node_modules/.bin/sequelize db:migrate

# This will cause the edits in migrations to be overwritten!
create-tables:
	# Remove old models and migrations
	rm -rf ${PROJECT_ROOT}/server/models/*
	rm -rf ${PROJECT_ROOT}/server/migrations/*

	# Create RSVP
	${PROJECT_ROOT}/node_modules/.bin/sequelize model:create --name RSVP --attributes id:uuid,name:string,email:string,meal:string,isComing:boolean

build:
	docker build -f ${PROJECT_ROOT}/Dockerfile -t sconnel42/web-server .
	#docker build -f ${PROJECT_ROOT}/Dockerfile.nginx -t sconnel42/dev-nginx .

clean:
	docker-compose -p wedding -f deploy/docker-compose.yaml down -v --rmi local
	docker network rm wedding-net
	rm -rf node_modules/
