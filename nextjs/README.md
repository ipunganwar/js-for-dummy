# Basics & Foundations (Introducting Key Features)
## File-based Routing
### <u>The special /pages folder</u>
 NextJS will automatically look inside this folder to serving component

 ### <u>How File-based routing works</u>
  - `/pages`
    - `index.js`  --> Main starting page (`my-domain.com/`)
    - `about.js`  --> About page (`my-domain.com/about`)
    - `/products`
      - `index.js` --> All products page (`my-domain.com/products`)
      - `[id].js` --> Product detail page --> All products page (`my-domain.com/products/1`)

  ### <u>Nested Dynamic Routes & Path</u>
  The dynamic part will threat as query param

  - `/pages`
    - `index.js`
    - `/clients`
      - `index.js`
      - `/[id]`  --> dynamic folder name (`my-domain.com/clients/id`)
        - `index.js`
        - `[clientid].js`   -> dynamic pages (`my-domain.com/clients/id/clientid`)

  ### <u>Catch All Routes</u>
  - Whats the different
    - `[id].js` is handle for specific segment or routes
    - `[...params].js` is handle for deeper routes
     ```
      ex: /articles/[...slug].js
        my-domain.com/articles/2022/js-basic

        in console log will display like this:
        {
          slug: ['2022', 'js-basic']
        }

      ex: /articles/[...slug].js
        my-domain.com/articles/what/ever/you/want

        in console log will display like this:
        {
          slug: ['what', 'ever', 'you', 'want']
        }
    ```

    - for best practice, in this project i used name `[...slug].js`

  ### NextJS Navigation
  - `useRouter` --> `next/router`
  - `Link` --> `next/link`



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