#!/bin/bash

# Make sure the backups have a place to go
mkdir -p /home/deployuser/backups
latest_backup_name=$(echo "backup_`date +\%Y\%m\%d\%H\%M\%S`.sql")

# Create the backup
source /home/deployuser/.env
pg_dump ${DB_CONNECTION_STRING} -t '"RSVPs"' --data-only --inserts > /home/deployuser/backups/${latest_backup_name}

# Push to Google Drive
wedding_dir=$(gdrive list | grep wedding | awk '{print $1}')
gdrive upload --parent ${wedding_dir} ${latest_backup_name}
