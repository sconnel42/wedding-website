#!/bin/bash

# Make sure the backups have a place to go
mkdir -p /home/deployuser/backups
latest_backup_name=$(echo "backup_`date +\%Y\%m\%d`.sql")

# Create the backup
source /home/deployuser/.env
pg_dump ${DB_CONNECTION_STRING} -t '"RSVPs"' --data-only --inserts > /home/deployuser/backups/${latest_backup_name}

# Push to DropBox
cp /home/deployuser/backups/${latest_backup_name} /home/deployuser/backups/wedding_website/backups/${latest_backup_name}
