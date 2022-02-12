import React from 'react'

// docs refer here https://reactjs.org/docs/error-boundaries.html 
export default class SafeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. </h1>
    }

    return this.props.children
  }
}