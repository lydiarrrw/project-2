import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import 'bulma'
import axios from 'axios'
//import './styles/style.scss'






const Nav = () => {


  return <>
    <div className="navbar">
      <div className="navbar-brand">
        <div className="navbar-burger">
        </div>
      </div>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div className="navbar-menu">
        <div className="navbar-start">
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link className="button" to={{ pathname: '/project-2/' }}>HOME</Link>
          </div>

          <div className="navbar-item">
            <Link className="button" to={{ pathname: '/project-2/Horror' }}>Horror</Link>
          </div>

          <div className="navbar-item">
            <Link className="button" to={{ pathname: '/project-2/Comedy' }}>Comedy</Link>
          </div>

          <div className="navbar-item">
            <Link className="button" to={{ pathname: '/project-2/Animation' }}>Animation</Link>
          </div>

          <div className="navbar-item">
            <Link className="button" to={{ pathname: '/project-2/Drama' }}>Drama</Link>
          </div>

          <div className="navbar-item">
            <Link className="button" to={{ pathname: '/project-2/Family' }}>Family</Link>
          </div>

          <div className="navbar-item">
            <Link className="button" to={{ pathname: '/project-2/Thriller' }}>Thriller</Link>
          </div>

          <div className="navbar-item">
            <Link className="button" to={{ pathname: '/project-2/SciFi' }}>Sci-Fi</Link>
          </div>

          <div className="navbar-item">
            <Link className="button" to={{ pathname: '/project-2/Action' }}>Action</Link>
          </div>

        </div>





      </div>
    </div>


  </>

}





export default Nav