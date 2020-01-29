#!/bin/bash

source .env

if [ -z "${DOCKER_NET}" ]; then
    echo "DOCKER_NET must be defined!"
    exit 1
fi

# Create docker network if it doesn't exist
DOCKER_NET_ID=$(docker network ls --format '{{.Name}}' | grep -w ${DOCKER_NET})
if [[ ${DOCKER_NET_ID} == "" ]]; then
    docker network create ${DOCKER_NET} || true
fi

# Pull latest images
docker pull sconnel42/web-server:latest
docker pull sconnel42/wedding-proxy:latest

# Start up web server
docker-compose -f docker-compose.yaml up --force-recreate -d
