#!/bin/bash

source .env

if [ -z "${DOCKER_NET}" ]; then
    echo "DOCKER_NET must be defined!"
    exit 1
fi

docker network create ${DOCKER_NET} || true
docker pull sconnel42/web-server:latest
docker pull sconnel42/wedding-proxy:latest
docker-compose -f docker-compose.yaml up --force-recreate -d
