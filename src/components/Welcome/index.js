import {Component} from 'react'

// using class component
class Welcome extends Component {
  render() {
    const {name} = this.props
    return <h1>Hello {name}!</h1>
  }
}

// const Welcome = () => <h1>Hello, User</h1> -- this is functional component

export default Welcome
