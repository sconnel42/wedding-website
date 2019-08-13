# This will cause the edits in migrations to be overwritten!
create-tables:
	# Remove old models and migrations
	rm -rf ${PROJECT_ROOT}/server/models/*
	rm -rf ${PROJECT_ROOT}/server/migrations/*

	# Create RSVP
	${PROJECT_ROOT}/node_modules/.bin/sequelize model:create --name RSVP --attributes id:uuid,name:string,email:string,meal:string,isComing:boolean

docker-build:
	./scripts/build.sh

# Running on host
host-setup:
	npm install
	docker network create wedding-net
	docker-compose -p wedding -f deploy/docker-compose.local.yaml up -d

host-clean:
	docker-compose -p wedding -f deploy/docker-compose.local.yaml down -v --rmi local
	docker network rm wedding-net
	rm -rf node_modules/

# Running everything via Docker
compose-setup: docker-build
	docker network create wedding-net
	docker-compose -p wedding -f deploy/docker-compose.yaml up -d

compose-up:
	docker-compose -p wedding -f deploy/docker-compose.yaml up -d

compose-down:
	docker-compose -p wedding -f deploy/docker-compose.yaml down

compose-clean:
	docker-compose -p wedding -f deploy/docker-compose.yaml down -v --rmi local
	docker network rm wedding-net

compose-test:
	docker build -f ${PROJECT_ROOT}/Dockerfile.test -t sconnel42/wedding-test .
	docker run sconnel42/wedding-test:latest

circle-test:
	node --version
	npm --version
	npm install && npm run build && npm run test:unit

circle-test-build: circle-test docker-build

circle-deploy:
	ssh-keygen -R ${DROPLET_IP}
	ssh-keyscan ${DROPLET_IP} >> ~/.ssh/known_hosts
	ssh ${DROPLET_USER}@${DROPLET_IP} 'pwd && ls -a'
	scp ${CIRCLE_WORKING_DIRECTORY}/deploy/docker-compose.yaml ${DROPLET_USER}@${DROPLET_IP}:/home/${DROPLET_USER}/docker-compose.yaml
	scp ${CIRCLE_WORKING_DIRECTORY}/scripts/deploy.sh ${DROPLET_USER}@${DROPLET_IP}:/home/${DROPLET_USER}/deploy.sh
	ssh ${DROPLET_USER}@${DROPLET_IP} 'sh deploy.sh'
