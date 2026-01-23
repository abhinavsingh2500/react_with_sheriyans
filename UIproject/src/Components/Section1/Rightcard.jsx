import React from 'react'
import { MoveRight } from 'lucide-react';


const Rightcard = (props) => {
  return (
    <div className='h-full w-60 p-5 relative rounded-3xl' >
      <img src={props.imgsrc} alt="Profile" className='h-full w-full object-cover rounded-3xl' />
        <div className='absolute top-0 left-0 h-full w-full rounded-3xl flex flex-col p-6 justify-between'>
          <h2 className='bg-white rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold'>1</h2>
          <div>
          
          <div className='flex justify-between items-center'> 
            
            <button className='bg-gray-500 rounded-full p-2'>Satisfied</button>
            <MoveRight  className='bg-gray-500 rounded-full p-1'/>
          </div>
          </div>

        </div>
    </div>
  )
}

export default Rightcard
