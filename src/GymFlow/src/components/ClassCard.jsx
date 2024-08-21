import React from 'react'
import { Link } from 'react-router-dom';

const ClassCard = (props) => {

  return (
    <>
        {/* Replace classDetails with class ID */}
        <Link to='/classes/classDetails'>
          <div class='card'>
            <div class='card-content'>
              <div class='media-content'>
                <p>{props.classType}</p>
                <p>{props.instructor}</p>
                <p>When: {props.date}</p>
                <p>Time: {props.time}</p>
                <p>Spaces left {props.space}</p>
              </div>
            </div>
          </div>
        </Link>
    </>
    
  )
}

export default ClassCard