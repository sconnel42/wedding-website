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

### TODO:

#### Frontend
- Navbar Styles
    - Make it mobile-friendly (hamburger open/close)
- Pic/Date Styles
    - Make pic extend the width of the screen on mobile
- Fix styling for RSVP form
- Fix styling for Contact form
- Style Registry section
- Make alerts appear/disappear nicely
- Reconcile odd styles on mobile
- Fill in Registry section with actual registries

#### Backend
- Create BE server (Express?)
- Send RSVP/Contact form submits BE endpoint
- Dynamically get all images from folder for frontend
- Remove public/imgs/
- Create Docker container to serve Vue
- Create Docker container to serve Express
- Create Docker DB and save RSVPs to it
- Tests!
- Host site on netlify

### Nice to Have
- Add maps for church/venue
- Pop pictures out
- Thin floral bar just below nav bar
- Floral design on sides of main picture
- Convert CSS to SASS
- Convert to Vue-Bootstrap
- Make Big Dipper look right on mobile (make a rotated square)
- Alt text for images with info
- Back to Top button
- Prometheus metrics to Grafana for site up, page views, etc
- Send email/message if site is down for too long

- Stats page on wedding stuff?
    - xx/xxx People have RSVPed
    - Pie chart of people who RSVPed
    - Recent RSVPs
    - Days until wedding
- Optimize for slow connections
