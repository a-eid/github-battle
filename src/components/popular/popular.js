import React , {Component} from 'react' 
import Loading from '../loading/react-loading' 
import SelectLanguage from './lang-list'
import RepoGrid from './repo-grid'
import api from '../../utils/api'
import './popular.css'  

class Popular extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedLanguage: "All",
      repos: [] 
    }
  }

  updateLanguage = (selectedLanguage) => {
    this.setState( _ => ({
      selectedLanguage ,
      repos: []
    })) 

    api.fetchPopularRepos(selectedLanguage)
      .then(repos => this.setState( _=> ({
        repos 
      })))    

  }

  componentDidMount(){
    this.updateLanguage(this.state.selectedLanguage)
  }

  render(){
    const langs = ['All' , 'Javascript' , 'Ruby' , 'Java' , 'Css' , 'Python']
    const {repos , selectedLanguage} = this.state 

    return(
      <div className="container">
        <SelectLanguage langs={langs} selectedLanguage={selectedLanguage} updateLanguage={this.updateLanguage} />
        { !(repos.length > 0) ? <Loading  type='bubbles' color='#e3e3e3' /> :<RepoGrid repos={repos} /> }
      </div>
    )
  }
}


export default Popular