import React,{ Component } from 'react'
import Header from './Header'

class Details extends Component{

  state = {
    pokemon : []
  }

  componentDidMount(){
    fetch(`https://api.pokemontcg.io/v1/cards/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(data => this.setState({pokemon:data.card}))
  }

  render(){
    const { imageUrl,name } = this.state.pokemon
    return (
      <div className = "container">
        <Header page = "details"/>
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src = {imageUrl } alt="img"></img>
            <div className="caption">
              <h3>{ name }</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Details
