#!/bin/bash

source .env

if [ -z "${DOCKER_NET}" ]; then
    echo "DOCKER_NET must be defined!"
    exit 1
fi

docker network create ${DOCKER_NET} || true
docker-compose -f docker-compose.yaml up -d