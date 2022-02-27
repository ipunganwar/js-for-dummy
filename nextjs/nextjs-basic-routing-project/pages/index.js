import { getFeaturedEvents } from '../data/dummy-data'
import List from '../components/events/List'

export default function HomePage () {
  const featureEvents = getFeaturedEvents()

  return (
    <div>
      <List items={featureEvents} />
    </div>
  )
}