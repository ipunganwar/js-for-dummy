import { useEffect, useState } from "react"
import useSWR from "swr"

export default function LastSalesPage (props) {
  // Traditionnaly using useEffect

  // const [sales, setSales] = useState()
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   setIsLoading(true)
  //   fetch('https://nextjs-course-5507c-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json')
  //   .then(response => response.json())
  //   .then(data => {
  //     const intoArray = []

  //     for (const key in data) {
  //       intoArray.push({
  //         id: key,
  //         username: data[key].username,
  //         volume: data[key].volume
  //       })
  //     }

  //     setSales(intoArray)
  //     setIsLoading(false)
  //   })
  // }, [])

  const [sales, setSales] = useState(props.sales)

  const fetcher = url => fetch(url).then(r => r.json())

  const { data, error } = useSWR(
    'https://nextjs-course-5507c-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json',
    fetcher
  )
  useEffect(() => {
    if (data) {
      const intoArray = []

      for (const key in data) {
        intoArray.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume
        })
      }
      setSales(intoArray)
    }
  }, [data])

  if (error) {
    return <p>Failed to load</p>
  }

  if (!data && !sales ) {
    return <p>Loading ...</p>
  }

  return (
    <ul>
      {sales.map(sale => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  )
}

export async function getStaticProps () {
  return fetch('https://nextjs-course-5507c-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json')
  .then(response => response.json())
  .then(data => {
    const intoArray = []

    for (const key in data) {
      intoArray.push({
        id: key,
        username: data[key].username,
        volume: data[key].volume
      })
    }

    return {
      props: {
        sales: intoArray,
      }
    }
  })
}