# This will cause the edits in migrations to be overwritten!
create-tables:
	# Remove old models and migrations
	rm -rf ${PROJECT_ROOT}/server/models/*
	rm -rf ${PROJECT_ROOT}/server/migrations/*

	# Create RSVP
	${PROJECT_ROOT}/node_modules/.bin/sequelize model:create --name RSVP --attributes id:uuid,name:string,email:string,meal:string,isComing:boolean

build:
	docker build -f ${PROJECT_ROOT}/Dockerfile.base -t sconnel42/app-base .
	docker build -f ${PROJECT_ROOT}/Dockerfile -t sconnel42/web-server .

setup: build
	docker network create wedding-net
	docker-compose -p wedding -f deploy/docker-compose.yaml up -d

clean:
	docker-compose -p wedding -f deploy/docker-compose.yaml down -v --rmi local
	docker network rm wedding-net
	rm -rf node_modules/
