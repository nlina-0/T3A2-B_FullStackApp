import React from 'react'

const ClassCard = () => {

  return (
    <>
      {/* bulma: components/card */}
      <div class="container is-max-tablet">
        <div class='card is-shadowless'>
          <div class='card-content'>
            <div class='content'>
              <p>Class Type: YOGA</p>
              <p>When: WED 20/08</p>
              <p>Time: 9:00 - 9.40</p>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default ClassCard