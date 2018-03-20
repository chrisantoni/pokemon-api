import React, { Component } from 'react'

class Filter extends Component{

  render(){
    return (
      <div className="form-horizontal">
      <h1>Filter</h1>
      <div className="form-group">
       <label className="col-sm-1 control-label">Types</label>
         <div className="col-sm-5">
          <select className="form-control" value = {this.props.types} onChange={this.props.handleFilterTypeChange}>
               <option value="" selected>Choose types ...</option>
               <option value="Colorless">Colorless</option>
               <option value="Darkness">Darkness</option>
               <option value="Dragon">Dragon</option>
               <option value="Fairy">Fairy</option>
               <option value="Fighting">Fighting</option>
               <option value="Fire">Fire</option>
               <option value="Grass">Grass</option>
               <option value="Lightning">Lightning</option>
               <option value="Metal">Metal</option>
               <option value="Psychic">Psychic</option>
               <option value="Water">Water</option>
           </select>
         </div>
       </div>

       <div className="form-group">
        <label className="col-sm-1 control-label">SubType</label>
          <div className="col-sm-5">
           <select className="form-control" value = {this.props.subtypes} onChange={this.props.handleFilterSubtypeChange}>
                 <option value="" selected>Choose subtypes ...</option>
                 <option>EX</option>
                 <option>Special</option>
                 <option>Restored</option>
                 <option>Level Up</option>
                 <option>MEGA</option>
                 <option>Technical Machine</option>
                 <option>Item</option>
                 <option>Stadium</option>
                 <option>Supporter</option>
                 <option>Stage 1</option>
                 <option>GX</option>
                 <option>Pokémon Tool</option>
                 <option>Basic</option>
                 <option>LEGEND</option>
                 <option>Stage 2</option>
                 <option>BREAK</option>
                 <option>{"Rocket's Secret Machine"}</option>
            </select>
          </div>
        </div>
        <div className="form-group">
         <label className="col-sm-1 control-label">Supertype</label>
           <div className="col-sm-5">
            <select className="form-control" value = {this.props.supertypes} onChange={this.props.handleFilterSupertypesChange}>
                  <option value="" selected>Choose supertypes ...</option>
                  <option>Energy</option>
                  <option>Pokémon</option>
                  <option>Trainer</option>
             </select>
           </div>
         </div>
         <br/>

         <hr/>
      </div>
    )
  }
}

export default Filter
