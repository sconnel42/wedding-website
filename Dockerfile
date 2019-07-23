FROM node:10
COPY ./ /app
WORKDIR /app
RUN npm install && npm run build

COPY --chown=node:node . .
EXPOSE 8080
CMD [ "node", "/app/server/app.js" ]
