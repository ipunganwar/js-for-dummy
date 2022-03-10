import path from 'path'
import fs from 'fs/promises'

export default function HomePage (props) {
  const { products } = props
  return (
    <ul>
      { products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps () {
  console.log('Re-(Generating)...')
  const pathFile = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(pathFile)
  const data = JSON.parse(jsonData)

  if (!data) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }

  if (data.products.length === 0) {
    return { notFound: true } // will return 404
  }

  return {
    props: {
      products: data.products
    },
    revalidate: 10,
  }
}