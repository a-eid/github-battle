import React , {Component} from 'react' 
import SelectLanguage from './select-language'
import './popular.css'  


class Popular extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedLanguage: "All"
    }
  }

  updateLanguage = (selectedLanguage) => {
    this.setState(_ => ({
      selectedLanguage
    }))
  }

  render(){
    const langs = ['All' , 'Javascript' , 'Ruby' , 'Java' , 'Css' , 'Python']
    return(
      <SelectLanguage langs={langs} selectedLanguage={this.state.selectedLanguage} updateLanguage={this.updateLanguage} />
    )
  }
}


export default Popular