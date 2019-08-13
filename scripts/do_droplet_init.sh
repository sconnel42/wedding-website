#!/bin/bash

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

echo "Copy up .env"
scp .env ${DROPLET_USER}@${DROPLET_IP}:/home/${DROPLET_USER}/.env

echo "Create SSH key for CCI"
ssh ${DROPLET_USER}@${DROPLET_IP} 'ssh-keygen -t rsa -N "" -f /home/deployuser/.ssh/deploy_id_rsa && cat /home/deployuser/.ssh/deploy_id_rsa.pub >> authorized_keys'

echo "Copy SSH key back to local machine"
scp ${DROPLET_USER}@${DROPLET_IP}:/home/${DROPLET_USER}/.ssh/deploy_id_rsa ~/.ssh/

echo "Now run 'cat ~/.ssh/deploy_id_rsa' and copy that key into CCI"
