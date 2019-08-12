# Wedding Website
A website for our wedding, written with Vue and Bootstrap

[![CircleCI](https://circleci.com/gh/sconnel42/wedding-website/tree/master.svg?style=svg)](https://circleci.com/gh/sconnel42/wedding-website/tree/master)

### Supported vue-cli commands
```
npm install
npm run serve
npm run build
npm run test
npm run lint
```

### Developing on host
- Run `cp sample.env .env` and fill in DB password
- Make sure `DB_HOST="localhost"` and `DB_PORT="25432"`
- Run make `docker-build && make host-setup` to bring up the DB
- Run `npm run serve` to run the FE code
- Run `npm run serve-be` in a separate terminal to run the BE code
- Go to localhost:8080 to see the app!


### Running via Docker
- Run `cp sample.env .env` and fill in DB password
- Make sure `DB_HOST="wedding-db"` and `DB_PORT="5432"`
- Run `make compose-setup` to build the Docker containers and bring everything up
- Bring the containers up and down with `make compose-up` and `make compose-down`, respectively
- Run `make compose-clean` to tear everything down
- You can still see the app via localhost:8080


### Running tests
- Run `npm run test:unit` to run the unit tests
- To run the tests as they do on CircleCI, run `make compose-test`

### TODO:

#### Backend
- CircleCI: Base image be the docker one
- CircleCI: Run tests via Docker
- CircleCI: Build new images after Tests
- Start up DigitalOcean Droplet with SSH key for my machine
- Put SSH key in CircleCI
- Deploy to Droplet (SSH into Droplet, pull latest images, and run docker-compose)
- Create Droplet startup script (including loading latest DB backup into Droplet)
- Create cron job for DB backups to Google Drive
- Dynamically get all images from folder for frontend
- Remove public/imgs/

### Do Later
- Modify RSVP Form with better info
- Fill in Registry section with link to Zola Registry
- Fix Registry styling
- Hotels & Wedding Party?

### Nice to Have
- Add maps for church/venue
- Pop pictures out
- Thin floral bar just below nav bar
- Floral design on sides of main picture
- Make Big Dipper look right on mobile (make a rotated rectangle)
- Replace favicon with image of page curtain
- Alt text for images with info
- Prometheus metrics to Grafana for site up, page views, etc
- Send message if site is down for too long


- Stats page on wedding stuff?
    - xx/xxx People have RSVPed
    - Pie chart of people who RSVPed
    - Recent RSVPs
    - Days until wedding
- Optimize for slow connections
- Express JS to ES6
- Convert CSS to SASS
- Convert to Vue-Bootstrap
- Actually have FE and BE in separate Docker containers
- Make tables be underscored
- Generate migrations from models file (sequelize-auto-generate)
