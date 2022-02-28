import { useRouter } from 'next/router'
import { Fragment } from 'react'

import { getEventById } from '../../data/dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistic from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'

export default function EventDetailPage () {
  const router = useRouter()

  const eventId = router.query.eventId
  const event = getEventById(eventId)

  console.log(event)
  if (!event) {
    return (<p>No Event found !</p>)
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistic
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}