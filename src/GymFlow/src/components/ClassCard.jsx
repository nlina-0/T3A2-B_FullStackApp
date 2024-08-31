import React from 'react'
import { Link } from 'react-router-dom';

const ClassCard = (props) => {

  return (
    <>
        <Link to={`/classes/${props.id}`}>
          <div className="card">
            <div className="card-content">
              <div className="media-content">
                <p className="title">{props.name}</p>
                <h1>{props.classType}</h1>
                <p>{props.instructor}</p>
                <p>When: {props.time}</p>
                <p>Duration: {props.duration} min</p>
                <p>Capacity: {props.capacity}</p>
              </div>
            </div>
          </div>
        </Link>
    </>
    
  )
}

export default ClassCard