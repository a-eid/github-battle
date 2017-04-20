import React from 'react'
import {Link} from 'react-router-dom' 
import './notfound.css'

export default () => (
  <div className='notfound' >
    <h3>Route not found , click below button to go to home page</h3> 
    <Link to="/">
    <button className="btn btn-primary">Home</button></Link>
  </div>
)