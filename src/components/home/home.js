import React from 'react'
import {Link} from 'react-router-dom' 
import './home.css'

export default () => (
  <div className="home">
    <h2>Github battle or find out which repos are most popular ..</h2>
    <div>
      <Link to="/battle">
        <button className="btn btn-primary">
          Battle
        </button>
      </Link>
      <Link to="/popular">
        <button className="btn btn-primary">
          Popular 
        </button>
      </Link>
    </div>
  </div> 
)