import React from 'react'
import logo from 'assets/images/logo.png'

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <a className="navigation-item" href="/">
        <img src={logo} />
      </a>
    </nav>
  )
}

export { Navigation }
