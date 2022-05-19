import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
      <Link className="navbar-brand" to="/">Friend App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
          <Link className="nav-link active" to="/">Friend</Link>
          <Link  className="nav-link" to="/view">Viewall</Link>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header