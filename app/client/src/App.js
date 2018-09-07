import React, { Component } from 'react'
import { loginUser } from './actions'
import { connect } from 'react-redux'
import Home from './Home'
import Logo from './components/Logo'
import './App.css'

class App extends Component {
  componentDidMount () {
    const { onLogin } = this.props
    onLogin()
  }

  render () {
    const { isLoggedIn } = this.props
    return (
      <div className='App'>
        <Logo>cue</Logo>
        {
          isLoggedIn && <Home />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { isLoggedIn } = state.User
  return {
    isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => {
      dispatch(loginUser())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
