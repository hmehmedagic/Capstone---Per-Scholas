import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <div className="title">Pokemon</div>
      <div className="links">
        <Link to="/">
          <div>Homepage</div>
        </Link>
        <hr />
        <Link to="/battle">
          <div>Battle</div>
        </Link>
        <hr />
        <Link to="/pokemon-selector">
          <div>Choose Your Pokemon</div>
        </Link>
        <hr />
        <Link to="/about">
          <div>About</div>
        </Link>
      </div>
    </div>
  )
}

export default Nav