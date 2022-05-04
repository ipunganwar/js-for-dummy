import { getFeaturedEvents } from '../helpers/api-utils'
import List from '../components/events/List'

export default function HomePage (props) {
  return (
    <div>
      <List items={props.events} />
    </div>
  )
}

export async function getStaticProps () {
  const featureEvents = await getFeaturedEvents()

  return {
    props: {
      events: featureEvents
    }
  }
}