import { useState } from 'react'

export default function ObjectHooks () {
  const [state, setState] = useState({ count: 0, theme: 'blue'})
  const { count, theme } = state

  function decrement () {
    setState(prevState => {
      return {
        ...prevState,
        count: prevState.count - 1
      }
    })
  }

  function increment () {
    setState(prevState => {
      return {
        ...prevState,
        count: prevState.count + 1
      }
    })
  }


  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <h2>{theme}</h2>
    </>
  )
}