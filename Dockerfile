FROM sconnel42/app-base
RUN npm install && npm run build

COPY --chown=node:node . .
EXPOSE 8080
CMD [ "node", "/app/server/server.js" ]
