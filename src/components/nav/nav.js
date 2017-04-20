import React from 'react' 
import {NavLink} from 'react-router-dom'
import './nav.css'

export default () => (
<nav className="nav" >
  <div>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeClassName="active" to="/popular">popular</NavLink>
    <NavLink activeClassName="active" to="/battle">battle</NavLink>
  </div>
</nav>
)