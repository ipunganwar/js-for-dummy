import { useRouter } from 'next/router'

export default function PortofolioProjectPage () {
  const router = useRouter()
  console.log(router.query)
  
  return (
    <div>
      <h1>The Project of a given Client</h1>
    </div>
  )
}