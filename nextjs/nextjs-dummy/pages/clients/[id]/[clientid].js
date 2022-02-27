import { useRouter } from 'next/router'

export default function ClientsIdPage () {
  const router = useRouter()
  console.log(router.query)

  return (
    <div>
      <h1>The Specific Client ID Page</h1>
    </div>
  )
}