import React from 'react'

const App = () => {
  let count = 0
  
  return (
    <>
      <h1>Gym Flow</h1>
      <button onSubmit={() => console.log('submit')}>Submit</button>
    </>
  )
}

export default App