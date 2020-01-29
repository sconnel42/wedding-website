#!/bin/bash

# A script to populate the DB from a csv_file.

source .env

csv_file="guest_list.csv"
DOCKER_ID=$(docker ps -aqf "name=wedding-db")

docker cp ${csv_file} ${DOCKER_ID}:/tmp/${csv_file}
psql ${DB_CONNECTION_STRING} -c "COPY \"RSVPs\"(name, \"searchKey\") FROM '/tmp/${csv_file}' DELIMITER ',' CSV HEADER;"
