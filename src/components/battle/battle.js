import React , {Component} from 'react'
import "./battle.css"
import {fetchUser} from '../../utils/api'
import PlayerForm from './player-form'
import Player from './player' 
import Submit from './submit'

export default class extends Component{
  constructor(props){
    super(props)
    this.state = {
      pOne:{
        index: 1 , 
        name: undefined , 
        pic : undefined ,
        score: undefined , 
        url: "", 
        valid: false  
      },
      pTwo:{
        index: 2 , 
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
      fetchUser(username)
      .then( u => {
        this.setState(ps => ({
          pTwo:{
            ...ps.pTwo , 
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

  handleReset = (index) => {
    let p = index === 1 ? "pOne" : "pTwo"
    this.setState({
      [p]:{
        index , 
        valid: false  
      }
    })
  }

  render(){
    const {pOne , pTwo} = this.state
    return(
      <div className="battle" > 
        <div className="player-wrapper">

          {pOne.valid ? <Player player={pOne}  handleReset={this.handleReset} /> :
            <PlayerForm handleSubmitPlayer={this.handleSubmitPlayer} 
            player="1" /> } 

          {pTwo.valid ? <Player player={pTwo}  handleReset={this.handleReset} /> : 
            <PlayerForm handleSubmitPlayer={this.handleSubmitPlayer} 
            player="2" /> } 
            
        </div>
      {pOne.valid && pTwo.valid ? <Submit /> : null }
     </div>
    )
  }
}

