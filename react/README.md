# ReactJS Hooks

# useState
## React useState Basic Functionality
- Hooks only can use inside `function component`, can't use in `class component`
- Hooks only can use in top level, cant use in nested condition

```
  const [value, setterValue] = useState(defaultValue)
```

### Working with Object State
```
const [state, setState] = useState({ stateA: 0, stateB: 'name' })
```

- When use setter function in useState, it will ovveriding and replace exisiting value in state, use object destructuring to handle this issue
```
setState(prevState => {
  return {
    ...prevState,
    count: prevState.count - 1
  }
})
```
- or to prevent happen clash in your state hooks, better using multiple hook for better separation of concern
```
const [stateA, setStateA] = useState(stateA)
const [stateB, setStateB] = useState(stateB)
```

### useState Function Version

- if you want to get previous state from useState, we can use param in useState callback
```
setValue(previousState => previousState - 1)
```

- for default state of function version, we can use `useState callback`, and prevent useState call multiple time (performance matter)
```
const [value, setterValue] = useState(() => {
  return defaultValue
})

// or passing function
function stateInitial () {
  return 0
}

const [value, setterValue] = useState(() => stateInitial())
```



# useEffect
What is useEffect mean ?
- useEffect is a hook for encapsulating code that has 'side effects,' and is like a combination of componentDidMount , componentDidUpdate , and componentWillUnmount . Previously, functional components didn't have access to the component life cycle, but with useEffect you can tap into it

> https://codeburst.io/quick-intro-to-react-hooks-6dd8ecb898ed

## How useEffect works
- useEffect is triggered when we passing state that will change
- structure like this:
```
useEffect(() => {}, [state])
```
- When you passing empty state in useEffect, it will working only in mounted lifecycle & never triggered again if we not passing state
```
useEffect(() => { console.log('mounted') }, [])
```

## How to Clean up our useEffect from last changes (unmounted)
- We need run return value to clean up latest changes in useEffect
```
useEffect(() => {
  window.addEventListener('resize', handleResize)
  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, [windowWidth])
```