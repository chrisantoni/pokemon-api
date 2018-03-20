import React from 'react'


const Header = (props) => (
    <div className="panel panel-default">
      <div className="panel-body">
        <h1 className="text-center">{props.page === "home" ? "List Of Pokemon Cards":"Pokemon Card Details"}</h1>
      </div>
      {props.page === "home" && <input type="text" className="form-control" onInput = {props.handleSearchTermChange} value={props.search} placeholder="Search"></input>}
    </div>
)

export default Header
