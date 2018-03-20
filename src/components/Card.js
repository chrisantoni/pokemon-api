import React from 'react'
import { Link } from 'react-router-dom'

const Card = props => (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src = { props.imageUrl } style = {{height:"230px",width:"250px"}} alt="img"></img>
          <div className="caption">
            <h3>{ props.name }</h3>
            <p>Type : {props.types ? props.types : '-'}</p>
            <p>Subtype : {props.subtype ? props.subtype : '-'}</p>
            <p>Supertype : {props.supertype ? props.supertype : '-'}</p>
            <p><Link to={`details/${props.id}`} className="btn btn-primary">Details</Link></p>
          </div>
        </div>
      </div>
  )

export default Card
