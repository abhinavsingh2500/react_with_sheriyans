import React from 'react'
import Lcontent from './Lcontent';
import Rcontent from './Rcontent';

const Pageonecontent = () => {
  return (
    <div className='py-3 px-18  flex justify-between space-x-5'>
        <Lcontent/>
        <Rcontent/>
      </div>
  )
}

export default Pageonecontent
