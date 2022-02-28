import { useRouter } from 'next/router'
import { Fragment } from 'react'

import { getEventById } from '../../data/dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistic from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/error-alert/error-alert'

export default function EventDetailPage () {
  const router = useRouter()

  const eventId = router.query.eventId
  const event = getEventById(eventId)

  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event found !</p>
      </ErrorAlert>
    )
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