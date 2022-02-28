# ReactJS Hooks

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