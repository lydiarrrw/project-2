import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return <>
  <ul>
    <li>
      <Link to={'/project-2'}>Home</Link>
    </li>
    <li>
      <Link to={'project-2/MoviePage'}>Bio</Link>
    </li>

    <li>
      <Link to={'/Bio'}>Next</Link>
    </li>
  </ul>
</>
  
}

export default Nav