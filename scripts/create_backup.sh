#!/bin/bash

# Make sure the backups have a place to go
mkdir -p /home/deployuser/backups
latest_backup_name=$(echo "backup_`date +\%Y\%m\%d`.sql")

# Create the backup
source /home/deployuser/.env
pg_dump ${DB_CONNECTION_STRING} -t '"RSVPs"' --data-only --inserts > /home/deployuser/backups/${latest_backup_name}

# Push to DropBox
cp /home/deployuser/backups/${latest_backup_name} /home/deployuser/Dropbox/wedding_website/backups/${latest_backup_name}

# Clear Dropbox's cache so it doesn't eat up disk space
rm -rf /home/deployuser/Dropbox/.dropbox.cache

# Clean up old images and volumes
docker system prune --volumes -f
