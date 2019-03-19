setup:
	docker network create wedding-net
	docker-compose -p wedding -f deploy/docker-compose.yaml up -d
	npm install
	sh ${PROJECT_ROOT}/scripts/createdb.sh
	sh ${PROJECT_ROOT}/scripts/create_tables.sh

clean:
	docker-compose -p wedding -f deploy/docker-compose.yaml down -v --rmi local
	docker network rm wedding-net
	rm -rf node_modules/
