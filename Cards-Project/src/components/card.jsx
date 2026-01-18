import { Bookmark } from 'lucide-react';
function Card()
{
  return (<><div className='parent'>
      <div className='card'>
        <div className='top'>
        <img src='https://imgs.search.brave.com/fDgnDC5_yugXHiCM6lN-rhPBXJ_NDMTyZplZXeJW8Us/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzkxLzU5LzIx/LzM2MF9GXzE2OTE1/OTIxODZfdXNBNkVz/Q2o3WDVtNjNWeUZx/TUNzaEpGYXBvSHB3/SUwuanBn'></img>
        <button><Bookmark size={30} /></button>
        
       </div>
        <div className='center'>
       <h2>Amazon</h2><span>1 month ago</span>
       <h1> Senior UI/UX Designer</h1>
       <div className='tag'><h3>Part-time</h3>
       <h3>Senior-Level</h3>
       </div> </div>
        <div className='bottom'>
          <h2>$120/hr</h2>
          <button>Apply Now</button>

        </div>

      </div>
</div>
  
</> )
}

export default Card;