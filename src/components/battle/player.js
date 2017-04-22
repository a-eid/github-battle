import React from 'react' 

export default ({player: {pic , score , name} , reset }) =>(
  <div>
    <p>{score}</p>
    <img src={pic} /> 
    <h3>{name}</h3>
    <button className="btn btn-primary">reset</button>
  </div>
)