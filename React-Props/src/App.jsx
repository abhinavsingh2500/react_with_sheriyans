import React from 'react'
import Card from "./components/Card";

const App = () => {
  return (<>
    <div className='parent'>
      <div className='Card'>
       <img src='https://plus.unsplash.com/premium_photo-1759385205208-69cf0280fe0b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D' alt="Profile Image"/>
      <Card name="Alice" age={30}/>
       </div>
       <div className='Card'>
        <img src='https://images.unsplash.com/photo-1750816204148-5d02aff367cb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D' alt="Profile Image"/>
      <Card name="Bob" age={25}/>
       </div>
    
    </div>
  </>)


}

export default App;
