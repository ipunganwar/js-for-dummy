import { getAllEvents } from "../../data/dummy-data"
import EventList from '../../components/events/List'
import EventSearch from '../../components/events/Search'
import { Fragment } from "react"
import { useRouter } from "next/router"

export default function MainEventsPage () {
  const events = getAllEvents()
  const router = useRouter()

  function findEventHandler (year, month) {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler}/>
      <EventList items={events}/>
    </Fragment>
  )
}