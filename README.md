# Wedding Website
A website for our wedding, written with Vue and Bootstrap and deployed onto DigitalOcean

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


### Deploying
- After starting up a Droplet, run `./scripts/do_droplet_init.sh DROPLET_IP` where `DROPLET_IP` is the IP address of the new Droplet
- Follow the instructions to put the correct SSH key onto CCI
- ssh into the Droplet as the and run `~/.dropbox-dist/dropboxd` to start the DropBox daemon for DB backups
- Make sure to update the `DROPLET_IP` env var on CCI too
- Then push code and it'll go all the way to the Droplet if it passes the tests

### TODO:
- Fix UTs
- Update people's names/keys in DB

### Nice to Have
- Make Big Dipper look right on mobile (make a rotated rectangle)
- Add maps for church/venue
- Optimize for slow connections
- Serve build FE from nginx container
- Serve images from folder on server and remove from Docker images
- Make DB tables be underscored
- RSVP updates
    - Make search better (fuzzy string search?)
    - Only show people in that group
    - Text updates
    - Song request
- Replace favicon with image of page curtain
- Pop pictures out on click
- Wedding Party?
- Thin floral bar just below nav bar
- Floral design on sides of main picture
- Stats page on wedding stuff?
    - xx/xxx People have RSVPed
    - Pie chart of people who RSVPed
    - Recent RSVPs
    - Days until wedding
- Metrics for site up, page views, etc
- Send message if site is down for too long
- Alt text for images with info
- Express JS to ES6
- Convert CSS to SASS
- Convert to Vue-Bootstrap
