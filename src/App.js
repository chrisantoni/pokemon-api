import React, { Component } from 'react';
import Spinner from 'react-spinkit'

import Header from './components/Header'
import Cards from './components/Cards'
import Filter from './components/Filter'

class App extends Component {
  state = {
    pokemons : [],
    search : "",
    types : "",
    subtypes:"",
    supertypes:"",
    isloading:false
  }

  handleSearchTermChange = event => {
    this.setState({search:event.target.value})
  }

  handleFilterTypeChange = e => {
    e.preventDefault()
    this.setState({types : e.target.value})
  }
  handleFilterSubtypeChange = e => {
    e.preventDefault()
    this.setState({subtypes : e.target.value})
  }

  handleFilterSupertypesChange = e => {
    e.preventDefault()
    this.setState({supertypes : e.target.value})
  }

  componentDidMount(){
    fetch("https://api.pokemontcg.io/v1/cards")
    .then(res => res.json())
    .then(data => this.setState({pokemons : data.cards}) )
    this.handleLoading()
  }

  handleLoading = () => {
    setTimeout(() => this.setState({isloading:true}),2000);
  }

  render() {
    const pokemons = this.state.pokemons
    return (
      this.state.isloading ?
        <div className="container">
          <Header page = "home" handleSearchTermChange = {this.handleSearchTermChange} search={this.state.search}/>
          <Filter
            subtypes={this.state.subtypes}
            types = {this.state.types}
            supertypes = {this.state.supertypes}
            handleFilterTypeChange = {this.handleFilterTypeChange}
            handleFilterSubtypeChange = {this.handleFilterSubtypeChange}
            handleFilterSupertypesChange = {this.handleFilterSupertypesChange}/>
          <Cards pokemons = { this.state.pokemons }
                 search = {this.state.search}
                 types = {this.state.types}
                 subtypes={this.state.subtypes}
                 supertypes={this.state.supertypes}/>
        </div>
        :
        <div className="container">
          <div style={{marginLeft: 500,marginTop:230}}>
              <Spinner name="ball-grid-pulse" color="red"/>
          </div>
        </div>



    );
  }
}












export default App;
