import React from 'react'

const TabList = ({ children }) => (
  <ul className='tab-list' style={TabListStyle}>
    { children }
  </ul>
)

const TabListStyle = {
  position: 'absolute',
  top: '112px',
  left: '0px'
}

export default TabList
