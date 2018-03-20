import React,{ Component } from 'react'
import Card from './Card'

class Cards extends Component{
  render(){
    return (
      <div className="row">
      {
        this.props.types || this.props.subtypes || this.props.supertypes || this.props.pokemons ?
        this.props.pokemons
        .filter(data => `${data.types}`.toUpperCase().indexOf(this.props.types.toUpperCase()) >= 0)
        .filter(data => `${data.subtype}`.toUpperCase().indexOf(this.props.subtypes.toUpperCase()) >= 0)
        .filter(data => `${data.supertype}`.toUpperCase().indexOf(this.props.supertypes.toUpperCase()) >= 0)
        .filter(data => `${data.name}`.toUpperCase().indexOf(this.props.search.toUpperCase()) >= 0)
        .map(pokemon => <Card key = {pokemon.id} {...pokemon}/>)
        :
        this.props.pokemons
        .filter(data => `${data.name}`.toUpperCase().indexOf(this.props.search.toUpperCase()) >= 0)
        .map(pokemon => <Card key = {pokemon.id} {...pokemon}/>)
      }
      </div>
    )
  }
}

export default Cards
