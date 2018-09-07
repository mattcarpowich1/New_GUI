import React from 'react'
import TabHover from './TabHover'
import Button from './Button'

const Tab = ({
  children,
  handleHover,
  isHover,
  hoverStyle,
  id
}) => {
  let styles
  if (isHover) {
    styles = {
      ...tabStyle,
      ...hoverStyle
    }
  } else {
    styles = tabStyle
  }

  return (
    <li
      key={id}
      className='tab'
      style={styles}>
      <Button
        handleMouseIn={() => handleHover(id)}
        handleMouseOut={() => handleHover(-1)}>
        { children }
      </Button>
    </li>
  )
}

const tabStyle = {
  borderTopRightRadius: '36px',
  borderBottomRightRadius: '36px',
  background: 'var(--white)',
  height: '73px',
  width: '144px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  marginBottom: '8px',
  boxShadow: 'var(--shadow)',
  transition: 'var(--quick)'
}

export default TabHover(Tab)
