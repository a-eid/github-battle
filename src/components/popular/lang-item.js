import React from 'react' 

const Language = ({lang , selectedLanguage , updateLanguage}) => (
  <li
    style={selectedLanguage == l ? {color: 'red'} : null } 
    onClick={updateLanguage.bind(null, l)}>{l}</li>
)