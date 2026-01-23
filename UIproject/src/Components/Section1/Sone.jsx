import React from 'react'
import Navbar from './Navbar'
import Pageonecontent from './Pageonecontent'

const Sone = () => {
  return (<>
    <div className=' h-screen w-full flex flex-col'>
     
        <Navbar />
      <Pageonecontent/>
       
    </div>
  </>)
}
export default Sone
