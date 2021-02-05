import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import 'bulma'



const Nav = () => {
  const [menu, showMenu] = useState(false)

  let nav

  if (menu) {
    nav = <div className="dropdown">
      <ul className="menu-list">
        <li className="mob-menu"><Link className="navitem">Discover</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/' }}>Home</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Horror' }}>Horror</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Comedy' }}>Comedy</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Animation' }}>Animation</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Drama' }}>Drama</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Family' }}>Family</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Thriller' }}>Thriller</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/SciFi' }}>Sci-Fi</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Action' }}>Action</Link></li>
      </ul>
    </div>
  }






  return <>
    <div className="navbar">
    <Link className="rexHeader" to={{ pathname: '/project-2/' }}>REXFLIX</Link>
      {nav}
      {/* <div className="navbar-brand">
        <div className="navbar-burger">
        </div>
      </div> */}
      <a role="button" className="navbar-burger" onClick={() => showMenu(!menu)}>
        <img src="/images/dinoooo.png" className="dinosmall" height="70px"></img>
      </a>
      <div className="navbar-menu">
        <div className="navbar-start">
        </div>
        <div className="navbar-end">

          <div className="navbar-item">
            <img className="burger" src="/images/dinoooo.png" onClick={() => showMenu(!menu)} />
          </div>

        </div>
      </div>
    </div>
  </>



}





export default Nav