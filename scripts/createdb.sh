#!/bin/bash

if [ -z "$DB_CONNECTION_STRING" ]; then
    echo "DB_CONNECTION_STRING not set, run 'source sample.env'"
    exit 1
fi

psql $DB_STRING -f ${PROJECT_ROOT}/scripts/createdb.sql
