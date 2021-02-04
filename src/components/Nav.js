import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import 'bulma'
import axios from 'axios'
//import './styles/style.scss'






const Nav = () => {


  return <>
    <div className="navbar">
      <div className="nav-start">
        
        <div className="navbar-brand">
          LOGO
        </div>

        <Link className="button" to={{
          pathname: '/project-2/'
        }}>
          <div className="navbar-item">
            Home
          </div>
        </Link>
      
        <Link className="button" to={{
          pathname: '/project-2/Horror'
        }}>
          <div className="navbar-item">
            Horror
          </div>
        </Link>

        <Link className="button" to={{
          pathname: '/project-2/Comedy'
        }}>
          <div className="navbar-item">
            Comedy
          </div>
        </Link>

        <Link className="button" to={{
          pathname: '/project-2/Animation'
        }}>
          <div className="navbar-item">
            Animation
          </div>
        </Link>

        <Link className="button" to={{
          pathname: '/project-2/Drama'
        }}>
          <div className="navbar-item">
            Drama
          </div>
        </Link>

        <Link className="button" to={{
          pathname: '/project-2/Family'
        }}>
          <div className="navbar-item">
            Family
          </div>
        </Link>

        <Link className="button" to={{
          pathname: '/project-2/Thriller'
        }}>
          <div className="navbar-item">
            Thriller
          </div>
        </Link>

        <Link className="button" to={{
          pathname: '/project-2/Sci-Fi'
        }}>
          <div className="navbar-item">
            Sci-Fi
          </div>
        </Link>

        <Link className="button" to={{
          pathname: '/project-2/Action'
        }}>
          <div className="navbar-item">
            Action
          </div>
        </Link>

      </div>
    </div>
  </>

}





export default Nav