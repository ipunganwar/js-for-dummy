import { useRouter } from "next/router"

export default function PortofolioProjectPage () {
  const router = useRouter()
  
  function loadProjectHandler () {
    // load data ...
    router.push({
      pathname: '/clients/[id]/[clientid]',
      query: { id: 'max', clientid: 'projectA'}
    })
  }

  return (
    <div>
      <h1>The Project of a given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}