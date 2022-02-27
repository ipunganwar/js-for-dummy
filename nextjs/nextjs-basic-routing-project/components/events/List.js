import Item from './Item'
import classes from './Item.module.css'

export default function List (props) {
  const { items } = props

  return (
    <ul className={classes.list}>
      {
        items.map(event => (
        <Item
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
          />
        ))
      }
    </ul>
  )
}