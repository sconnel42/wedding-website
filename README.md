# Wedding Website
A website for our wedding, written with Vue and Bootstrap

### Supported vue-cli commands
```
npm install
npm run serve
npm run build
npm run test
npm run lint
```

### Setup for Dev work
- Add `127.0.0.1    wedding-db` to /etc/hosts
- Run `cp sample.env .env` and fill in DB password

### TODO:

#### Backend
- Do setup steps inside docker container (for proper DB connection setup)
- Serve express via nginx
- Dynamically get all images from folder for frontend
- Remove public/imgs/
- Tests!
- CI pipeline
- Host site on netlify
- Ensure DB is persisted on redeploys

### Do Later
- Modify RSVP Form with better info
- Fill in Registry section with actual registries
- Fix Registry styling
- Hotels & Wedding Party?

### Nice to Have
- Add maps for church/venue
- Pop pictures out
- Thin floral bar just below nav bar
- Floral design on sides of main picture
- Convert CSS to SASS
- Convert to Vue-Bootstrap
- Make Big Dipper look right on mobile (make a rotated rectangle)
- Replace favicon with image of page curtain
- Alt text for images with info
- Prometheus metrics to Grafana for site up, page views, etc
- Send email/message if site is down for too long

- Stats page on wedding stuff?
    - xx/xxx People have RSVPed
    - Pie chart of people who RSVPed
    - Recent RSVPs
    - Days until wedding
- Optimize for slow connections
- Generate migrations from models file (sequelize-auto-generate)
- Make tables be underscored
