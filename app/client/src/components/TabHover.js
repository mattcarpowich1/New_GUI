import React, { Component } from 'react'

const TabHover = WrappedTab => {
  return class extends Component {
    constructor (props) {
      super(props)
      this.state = {
        hover: -1
      }

      this.toggleHover = this.toggleHover.bind(this)
    }

    toggleHover (id) {
      this.setState({
        hover: id
      })
    }

    render () {
      return (
        <WrappedTab
          {...this.props}
          handleHover={this.toggleHover}
          hoverStyle={styles}
          isHover={this.props.id === this.state.hover}
        />
      )
    }
  }
}

const styles = {
  boxShadow: 'var(--shadow-hover)',
  width: '176px',
  paddingLeft: '32px',
  transition: 'var(--quick)'
}

export default TabHover
