# Basics & Foundations (Introducting Key Features)
## File-based Routing
### The special /pages folder
 NextJS will automatically look inside this folder to serving component

 #### How File-based routing works
  - /pages
    - index.js  --> Main starting page (my-domain.com/)
    - about.js  --> About page (my-domain.com/about)
    - /products
      - index.js --> All products page (my-domain.com/products)
      - [id].js --> Product detail page --> All products page (my-domain.com/products/1)

  #### Nested Dynamic Routes & Path
  The dynamic part will threat as query param

  - /pages
    - index.js
    - /clients
      - index.js
      - /[id]   --> dynamic folder name (my-domain.com/clients/id)
        - index.js
        - [clientid].js   -> dynamic pages (my-domain.com/clients/id/clientid)


## Page Pre-rendering & Data Fetching
## Combining "Standart React" & Nextjs
## API Routes & Fullstack Capabilities


# Advanced Concepts (Building for Production)
## Optimization Opportunities
## Looking Behind the Scenes & Theory
## Deployment & Configuration
## Authentication


# Summaries & Refreshing (Optimizing your Time)
## Reactjs Refresher
## NextJS Summary