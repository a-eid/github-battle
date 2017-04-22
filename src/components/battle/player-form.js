import React , {Component} from 'react' 

export default class PlayerForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: ""
    }
  }

  handleSubmit = (e)  => {
    e.preventDefault()
    const {player , handleSubmitPlayer } = this.props
    handleSubmitPlayer(player , this.state.username)
  }

  handleChange = (e) => {
    this.setState({
      username : e.target.value
    })
  }

  render(){
    const { username } = this.state
    const { player } = this.props
    return(
      <form action="" className="form" onSubmit={this.handleSubmit} >
        <input value={username} onChange={this.handleChange} 
          type="text" className="form-control" placeholder={`Enter ${player === "1" ? "first player" : "second player"} name`} /> 
        <br />
        <button className="btn btn-primary" >submit</button>
      </form>
    )
  }
}