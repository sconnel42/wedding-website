#!/bin/bash

BASE_IMAGE="sconnel42/app-base"
SERVER_IMAGE="sconnel42/web-server"
BUILD_NUMBER=${CIRCLE_BUILD_NUM:-"0"}
VERSION="0.1.${BUILD_NUMBER}"

# Login to Docker Hub
echo "$DOCKER_PASS" | docker login --username $DOCKER_USER --password-stdin

# Build images
source sample.env
docker build -f ${PROJECT_ROOT}/Dockerfile.base -t sconnel42/app-base .
docker build -f ${PROJECT_ROOT}/Dockerfile -t sconnel42/web-server .

# Publish app-base image
echo "Pushing image ${BASE_IMAGE}:${VERSION}"
docker tag ${BASE_IMAGE}:latest ${BASE_IMAGE}:${VERSION}
docker push ${BASE_IMAGE}:${VERSION}
docker push ${BASE_IMAGE}:latest

# Publish web-server image
echo "Pushing image ${SERVER_IMAGE}:${VERSION}"
docker tag ${SERVER_IMAGE}:latest ${SERVER_IMAGE}:${VERSION}
docker push ${SERVER_IMAGE}:${VERSION}
docker push ${SERVER_IMAGE}:latest
