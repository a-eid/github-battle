import React , {Component} from 'react'
import "./battle.css"
import {fetchUser} from '../../utils/api'
import PlayerForm from './player-form'
import Player from './player' 

export default class extends Component{
  constructor(props){
    super(props)
    this.state = {
      pOne:{
        name: undefined , 
        pic : undefined ,
        score: undefined , 
        url: "", 
        valid: false 
      },
      pTwo:{
        name: undefined , 
        pic: undefined ,
        url: "", 
        score: undefined , 
        valid: false 
      }
    }
  }

  handleSubmitPlayer = (player , username) => {
    if(player === "1"){
      fetchUser(username)
      .then( u => {
        this.setState(ps => ({
          pOne:{
            ...ps.pOne , 
            name: u.name , 
            url: u.html_url , 
            score: 1000 , 
            pic: `${u.html_url}.png?size=200` , 
            valid: !!u.name
          },
          pTwo:{
            ...ps.pTwo
          }
        }))        
      })
      .catch(e => console.log(e))
    }else if (player === "2"){
      console.log('here')
      fetchUser(username)
      .then( u => {
        this.setState(ps => ({
          pTwo:{
            ...ps.pTwo,
            name: u.name , 
            url: u.html_url , 
            score: 1000 , 
            pic: `${u.html_url}.png?size=200` , 
            valid: !!u.name
          },
          pOne:{
            ...ps.pOne
          }
       }))        
      })
      .catch(e => console.log(e))
    }
  }

  render(){
    const {pOne , pTwo} = this.state
    return(
      <div className="battle">
        {pOne.valid ? <Player player={pOne} username={pOne.name} /> :
          <PlayerForm handleSubmitPlayer={this.handleSubmitPlayer} 
          player="1"/> } 
        {pTwo.valid ? <Player player={pOne} username={pOne.name} /> : 
          <PlayerForm handleSubmitPlayer={this.handleSubmitPlayer} 
          player="2"/> } 
        {pOne.valid && pTwo.valid ? <Submit /> : null }
      </div>
    )
  }
}


// idk , 
const Submit = () => (
  <button>Submit</button>
)