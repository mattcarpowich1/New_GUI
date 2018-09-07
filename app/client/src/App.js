import React, { Component } from 'react'
import { loginUser } from './actions'
import { connect } from 'react-redux'
import Home from './Home'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  componentDidMount () {
    this.props.onLogin()
  }

  render () {
    const { isLoggedIn } = this.props
    console.log(this.props)
    return (
      <div className='App'>
        {
          isLoggedIn && <Home />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.User
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
