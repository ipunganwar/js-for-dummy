import { useRouter } from 'next/router'

export default function PortofolioProjectPage () {
  const router = useRouter()
  console.log(router.pathname)
  console.log(router.query)

  return (
    <div>
      <h1>The Portofolio Project Page</h1>
    </div>
  )
}