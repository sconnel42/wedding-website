#!/bin/bash

source sample.env
docker build -f ${PROJECT_ROOT}/Dockerfile.base -t sconnel42/app-base .
docker build -f ${PROJECT_ROOT}/Dockerfile -t sconnel42/web-server .
