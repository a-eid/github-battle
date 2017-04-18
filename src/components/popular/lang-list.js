import React from 'react' 
import LangItem from './lang-item' 

const LangList = ({ langs , updateLanguage , selectedLanguage }) => (
<ul className="languages">
  {langs.map(l => <LangItem key={l} updateLanguage={updateLanguage} selectedLanguage={selectedLanguage} />)} 
</ul>
)

export default LangList  