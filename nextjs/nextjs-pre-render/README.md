# Pre-Rendering
- Static Generation
- Server Side Generation
# Static Generation
- getStaticProps
- getStaticPaths
### About getStaticProps
- it will trigger first time
- after getStaticProps running , it will passing props into component
- the function & data inside getStaticProps will not passing into client
- not recomended if the data change frequently, need rebuild and redeploy all the time

`source`:`https://nextjs.org/docs/api-reference/data-fetching/get-static-props`

### Revalidate getStaticProps
return `revalidate` in `getStaticProps` function will trigger getStaticProps in interval-based revalidation (in second)
`source` : `https://nextjs.org/blog/next-12-1`

source: https://nextjs.org/docs/api-reference/data-fetching/get-initial-props

### Issue
### Node version to old
- i found issue when using Node 12, `fs/promises` not found. finally i'm using node 14 to solve that


### Pre-generate Page (Dynamic Page)
- Dynamic Pages `([id].js etc)` don't just need data:
 You also need to know which [id] values will be available (blueprint)

### getStaticPaths
- this function will help us to create this dynamic [id] blueprint for pages
- when you run build, the dynamic page will include in build.

### Issue: what if our app had an thousand of dynamic id ?
- Since the getStaticPaths must manually registered our [id] to pre-generated, we can use `fallback` mode to `true`

`source`: `https://nextjs.org/docs/basic-features/data-fetching/get-static-paths`

### Fallback Mode
- true --> need handling with condition if the `[id]` not found
- `bloking` --> don't need handling with condition, but sometimes longer than true becase in next side need parsing the page



# Server Side Rendering
- Sometimes, you need to pre-render every request OR you need access to the request objct (e.g cookies)
- getStaticProps
- getServerSideProps

### getServerSideProps Context
- we can get most information (e.g request etc) in context better then `getStaticProps`


# Client Side Data-Fetching
- we can use react hooks like useEffect to request/fetch data OR
- we can use nextjs hooks 3rd-party (SWR) to handling fetch/request data

## SWR
- swr is 3rd party create by core team from nextjs, it scope will handling hooks like fetching, cache and the other.
- Source: `https://swr.vercel.app/docs/with-nextjs`

# Combining Fetch from Server and Client-side
- using `getStaticProps` OR `getServerSideProps` to handling fetch, in this case we can't use `swr` / `react hooks` because it is in nextjs scope.
- we can combine this method, if we want to combine fetching from server and client stimously to revalidate the response and skip the `Loading` state