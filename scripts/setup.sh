#/bin/bash

# Only do setup steps if DB doesn't already exist
if psql ${DB_STRING} -lqt | cut -d \| -f 1 | grep -wq wedding_db; then
    echo "Database exists, skipping setup."
else
    npm install
    sh ${PROJECT_ROOT}/scripts/createdb.sh
    ${PROJECT_ROOT}/node_modules/.bin/sequelize db:migrate
fi
