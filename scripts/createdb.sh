#!/bin/bash

if [ -z "$DB_CONNECTION_STRING" ]; then
    echo "DB_CONNECTION_STRING not set, run 'source sample.env'"
    exit 1
fi

echo psql $DB_STRING -f ${PROJECT_ROOT}/scripts/createdb.sql
psql $DB_STRING -f ${PROJECT_ROOT}/scripts/createdb.sql
