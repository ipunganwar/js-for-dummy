# About getStaticProps
- it will trigger first time
- after getStaticProps running , it will passing props into component
- the function & data inside getStaticProps will not passing into client

# Issue
## Node version to old
- i found issue when using Node 12, `fs/promises` not found. finally i'm using node 14 to solve that