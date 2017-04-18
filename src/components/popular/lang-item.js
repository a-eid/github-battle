import React from 'react' 

const LangItem = ({lang , selectedLanguage , updateLanguage}) => (
  <li style={selectedLanguage === lang ? {color: 'red'} : null } 
    onClick={updateLanguage.bind(null, lang)}>{lang}</li>
)


export default LangItem