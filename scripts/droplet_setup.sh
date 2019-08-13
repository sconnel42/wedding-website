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
#chown ${DEPLOYUSER}:${DEPLOYGROUP} /home/${DEPLOYUSER}/.docker -R
#chmod g+rwx "/home/${DEPLOYUSER}/.docker" -R

# Open firewall for web server (80, 443, 8080)
ufw allow http
ufw allow https
ufw allow 8080/tcp
