import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../data/dummy-data'
import EventList from '../../components/events/List'
import ResultTitle from '../../components/results-title/results-title'
import { Fragment } from 'react'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/error-alert/error-alert' 

export default function FilteredEventsPage () {
  const router = useRouter()
  const filterData = router.query.slug
  
  if  (!filterData) {
    return (
      <p className="center">Loading ...</p>
    )
  }

  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]
  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth > 13 ||
    numMonth < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter. please adjust your value</p>
        </ErrorAlert>
        <div className="center">
          <Button href="/events">Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  const filteredEvent = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if (!filteredEvent || filteredEvent.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the choosen filter </p>
        </ErrorAlert>
        <div className="center">
          <Button href="/events">Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <Fragment>
      <ResultTitle date={date}/>
      <EventList items={filteredEvent}/>
    </Fragment>
  )
}