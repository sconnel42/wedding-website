#!/bin/bash
DEPLOYUSER="deployuser"
DEPLOYGROUP="deploygroup"
DEPLOYUSER_PASSWORD=$(openssl rand -base64 12)

# Create user for deploy to login as
echo "Creating user with password: ${DEPLOYUSER_PASSWORD}"
addgroup ${DEPLOYGROUP}
useradd ${DEPLOYUSER} -s /bin/bash -m -g ${DEPLOYGROUP} -G ${DEPLOYGROUP}
echo -e "${DEPLOYUSER_PASSWORD}\n${DEPLOYUSER_PASSWORD}" | passwd ${DEPLOYUSER}
usermod -aG sudo ${DEPLOYUSER}

# Modify files so you can ssh as that user
mkdir -p /home/${DEPLOYUSER}/.ssh
touch /home/${DEPLOYUSER}/.ssh/authorized_keys
chown ${DEPLOYUSER}:${DEPLOYGROUP} /home/${DEPLOYUSER}/.ssh
chown ${DEPLOYUSER}:${DEPLOYGROUP} /home/${DEPLOYUSER}/.ssh/authorized_keys
chmod 700 /home/${DEPLOYUSER}/.ssh
chmod 600 /home/${DEPLOYUSER}/.ssh/authorized_keys
cp /root/.ssh/authorized_keys /home/${DEPLOYUSER}/.ssh/authorized_keys

# Give user Docker access
usermod -a -G docker ${DEPLOYUSER}

# Open firewall for web server (80, 443, 8080)
ufw allow http
ufw allow https
ufw allow 8080/tcp

# Install postgres for backups
apt-get install wget ca-certificates
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" >> /etc/apt/sources.list.d/pgdg.list'
apt-get update && apt-get install -y postgresql postgresql-contrib

# Letting us access the Docker DB at wedding-db:5432
service postgresql stop
echo "127.0.0.1  wedding-db" >> /etc/hosts

# Download gdrive tool
echo "Downloading gdrive"
wget -O /home/${DEPLOYUSER}/gdrive https://docs.google.com/uc?id=0B3X9GlR6EmbnWksyTEtCM0VfaFE&export=download
sleep 5
chmod +x /home/${DEPLOYUSER}/gdrive
install /home/${DEPLOYUSER}/gdrive /usr/local/bin/gdrive

# Authenticate
gdrive list

# Pull latest backup from Google Drive and put into scripts/backup.sql
echo "Pulling latest backup from Google Drive"
latest_backup=$(gdrive list --query "name contains 'backup' and name contains 'sql'" --no-header | tail -1)
latest_backup_id=$(echo ${latest_backup} | awk '{print $1}')
latest_backup_name=$(echo ${latest_backup} | awk '{print $2}')
gdrive download ${latest_backup_id}
mv ${latest_backup_name} /home/deployuser/backup.sql
