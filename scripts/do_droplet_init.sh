#!/bin/bash -e

DROPLET_USER="deployuser"
DROPLET_IP="$1"

if [ -z "${DROPLET_IP}" ]; then
    echo "DROPLET_IP must be defined!"
    exit 1
fi

echo "Remove old key"
if [ -f ~/.ssh/deploy_id_rsa ] ; then
    rm ~/.ssh/deploy_id_rsa
fi

echo "Connecting to root@${DROPLET_IP}"
scp scripts/droplet_setup.sh root@${DROPLET_IP}:/droplet_setup.sh

echo "Execute droplet_setup"
ssh root@${DROPLET_IP} 'sh /droplet_setup.sh'

echo "Copy up files"
scp .env \
    backup.sql \
    deploy/docker-compose.yaml \
    scripts/deploy.sh \
    scripts/create_backup.sh \
    scripts/init-letsencrypt.sh \
    ${DROPLET_USER}@${DROPLET_IP}:/home/${DROPLET_USER}

echo "Start web server and load initial data"
ssh ${DROPLET_USER}@${DROPLET_IP} 'source .env \
    && ./deploy.sh \
    && docker wait deployuser_wedding-db-setup_1 \
    && psql ${DB_CONNECTION_STRING} -f /home/deployuser/backup.sql'

echo "Create cronjobs"
ssh ${DROPLET_USER}@${DROPLET_IP} '(crontab -l 2>/dev/null; echo "0 */6 * * * /home/deployuser/create_backup.sh") | crontab -'

echo "Create SSH key for CCI"
ssh ${DROPLET_USER}@${DROPLET_IP} 'ssh-keygen -t rsa -N "" -f /home/deployuser/.ssh/deploy_id_rsa && cat /home/deployuser/.ssh/deploy_id_rsa.pub >> /home/deployuser/.ssh/authorized_keys'

echo "Copy SSH key back to local machine"
scp ${DROPLET_USER}@${DROPLET_IP}:/home/${DROPLET_USER}/.ssh/deploy_id_rsa ~/.ssh/

echo "Now run 'cat ~/.ssh/deploy_id_rsa' and copy that key into CCI"
echo "Then ssh back to the server and run ./init-letsencrypt.sh to get the certificates set up for HTTPS"
