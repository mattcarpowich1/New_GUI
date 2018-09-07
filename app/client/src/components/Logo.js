import React from 'react'

const Logo = ({children}) => (
  <h1 style={logoStyle}>
    { children }
  </h1>
)

const logoStyle = {
  fontFamily: 'var(--font-primary)',
  fontSize: '48px',
  position: 'absolute',
  top: '16px',
  left: '8px',
  textAlign: 'left',
  color: 'var(--white)',
  width: 'calc(100vw - 15px)',
  border: 'none',
  borderTopLeftRadius: '36px',
  borderBottomLeftRadius: '36px',
  borderRight: 'none',
  paddingLeft: '11px',
  height: '73px',
  lineHeight: '68px',
  background: 'var(--purple)',
  boxShadow: 'var(--shadow)'
}

export default Logo