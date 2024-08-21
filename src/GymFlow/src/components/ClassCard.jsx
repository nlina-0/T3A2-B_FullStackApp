import React from 'react'

const ClassCard = (props) => {

  return (
    <>
      {/* bulma: components/card */}
      <div class="container is-max-tablet">
        <div class='card'>
          <div class='card-content'>
            <div class='media-content'>
              <p>{props.classType}</p>
              <p>{props.instructor}</p>
              <p>When: {props.date}</p>
              <p>Time: {props.time}</p>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default ClassCard