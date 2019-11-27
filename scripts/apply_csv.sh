#!/bin/bash

IP_ADDRESS="167.172.251.117"

scp /home/seanconnelly/Downloads/guest_list.csv deployuser@${IP_ADDRESS}:/home/deployuser/guest_list.csv
ssh deployuser@${IP_ADDRESS}
source .env
docker cp /home/deployuser/guest_list.csv deployuser_wedding-db_1:/tmp/guest_list.csv
psql ${DB_CONNECTION_STRING} -c "COPY \"RSVPs\"(name, email, \"searchKey\") FROM '/tmp/guest_list.csv' DELIMITER ',' CSV HEADER;"
