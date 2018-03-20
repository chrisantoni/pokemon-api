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

  handleAbility = () => {
    let ability = {}
    for(let item in this.state.pokemon.ability){
      ability[item] = this.state.pokemon.ability[item]
    }

    return ability
  }

  handleAttack = () => {
    let attacks = []
    for(let item in this.state.pokemon.attacks){
      attacks.push({convertedEnergyCost: this.state.pokemon.attacks[item].convertedEnergyCost,
                    damage : this.state.pokemon.attacks[item].damage,
                    name:this.state.pokemon.attacks[item].name,
                    text:this.state.pokemon.attacks[item].text,
                    cost:this.state.pokemon.attacks[item].cost})
    }

    return attacks

  }

  handleWeakness = () => {
    let weakness = []
    for(let item in this.state.pokemon.weaknesses){
      weakness.push({type: this.state.pokemon.weaknesses[item].type,
                    value : this.state.pokemon.weaknesses[item].value
                  })
    }
    return weakness
  }

  render(){
    const { imageUrl,name,artist,hp,rarity,series} = this.state.pokemon
    console.log("pokemon ",this.state.pokemon)
    const ability = this.handleAbility()
    const attacks = this.handleAttack()
    const weakness = this.handleWeakness()
    console.log("weakness ",weakness)
    return (
      <div className = "container">
        <Header page = "details"/>
      <div className ="row">
        <div className="col-md-6">
          <div className="thumbnail">
            <h1 className = "text-center">{name}</h1>
            <img src = {imageUrl } alt="img"></img>
          </div>
        </div>
        <div className="col-md-6">
          <p>Name : {name}</p>
          <p>Artist : {artist}</p>
          <p>Hp : {hp}</p>
          <p>Rarity : {rarity}</p>
          <p>Series : {series}</p>
            {
              this.state.pokemon.ability &&
            <p>Ability :
              <ul>
                  <li>name : {ability.name}</li>
                  <li>text : {ability.text}</li>
                  <li>type : {ability.type}</li>

              </ul>
            </p>
            }

            {
              this.state.pokemon.attacks &&
            <p>Attacks :
                {
                  attacks.map((attack,idx) => {
                  return (
                    <ul>[ {idx} ]
                    <li>convertedEnergyCost : {attack.convertedEnergyCost}</li>
                    <li>damage : {attack.damage}</li>
                    <li>name : {attack.name}</li>
                    <li>text : {attack.text}</li>
                    cost : {
                      attack.cost.map(cost => {
                        return (
                          <li style={{marginLeft:40,listStyleType:"circle"}}> {cost} </li>
                        )
                      })
                      }
                    </ul>
                  )
                })
              }

            </p>
            }

            {
              this.state.pokemon.weaknesses &&
            <p>Weaknesses :
                {
                  weakness.map((weakness,idx) => {
                  return (
                    <ul>[ {idx} ]
                    <li>type : {weakness.type}</li>
                    <li>value : {weakness.value}</li>
                
                    </ul>
                  )
                })
              }

            </p>
            }



        </div>
      </div>
      </div>
    )
  }
}

export default Details
