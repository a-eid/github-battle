import React from 'react' 


export default ({player: {pic ,url, score , name , index} , handleReset }) =>(
  <div className="player">
    <p>{score}</p>
    <img src={pic} alt={`player ${index === 1 ? "One" : "Two" }`} /> 
    <h3><a href={url} target="_blank">{name}</a></h3>
    <button onClick={handleReset.bind(null , index) } className="btn btn-primary">reset</button>
  </div>
)