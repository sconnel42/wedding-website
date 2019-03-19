#!/bin/bash

# NOTE: Uncommenting the following sections will cause the edits in migrations to be overwritten!
# Remove old models and migrations
#rm -rf ${PROJECT_ROOT}/server/models/*
#rm -rf ${PROJECT_ROOT}/server/migrations/*

# Create RSVP
#${PROJECT_ROOT}/node_modules/.bin/sequelize model:create --name RSVP --attributes id:uuid,name:string,email:string,meal:string,isComing:boolean

# Add migrations to DB
${PROJECT_ROOT}/node_modules/.bin/sequelize db:migrate
