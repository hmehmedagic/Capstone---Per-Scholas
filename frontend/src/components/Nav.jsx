import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ( {userState} ) => {
  const {user, setUser} = userState;

  const handleLogout = async() => {
    try {
      const res = await fetch('/api/logout', {
        method: 'POST',
      });
      if(res.ok) {
        setUser(null);
      }
    } catch(error) {
      console.error('We are having trouble logging you out.');
    }
  };

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
        {
          user ? (
            <div className='logout' onClick={handleLogout}>Logout</div>
          ) : (
            <Link to="/login">
              <div>Login/Register</div>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default Nav