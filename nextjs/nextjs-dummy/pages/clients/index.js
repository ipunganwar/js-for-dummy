import Link from 'next/link'

export default function ClientsPage () {
  const clients = [
    {id: 'jhon', name: 'Jhon Doe'},
    {id: 'max', name: 'Maximilian'}
  ]

  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        { clients.map(client => {
          <li key={client.key}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        })}
        <li>
          <Link href="/clients/jhon">Jhon Doe</Link>
        </li>
        <li>
          <Link href="/clients/max">Maximilian</Link>
        </li>
      </ul>
    </div>
  )
}