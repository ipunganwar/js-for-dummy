# About getStaticProps
- it will trigger first time
- after getStaticProps running , it will passing props into component
- the function & data inside getStaticProps will not passing into client
- not recomended if the data change frequently, need rebuild and redeploy all the time

## Revalidate getStaticProps
return `revalidate` in `getStaticProps` function will trigger getStaticProps in interval-based revalidation (in second)
`source` : `https://nextjs.org/blog/next-12-1`

source: https://nextjs.org/docs/api-reference/data-fetching/get-initial-props

# Issue
## Node version to old
- i found issue when using Node 12, `fs/promises` not found. finally i'm using node 14 to solve that