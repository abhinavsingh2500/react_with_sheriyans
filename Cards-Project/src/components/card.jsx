import { Bookmark } from 'lucide-react';
function Card(props)
{
  return (<>
      <div className='card'>
        <div className='top'>
        <img src={props.companyLogo}></img>
        <button><Bookmark size={30} /></button>
        
       </div>
        <div className='center'>
       <h2>{props.companyName}</h2><span>{props.posted}</span>
       <h1>{props.position}</h1>
       <div className='tag'><h3>{props.jobType}</h3>
       <h3>{props.level}</h3>
       </div> </div>
        <div className='bottom'>
          <h2>{props.salary}</h2>
          <button>Apply Now</button>

        </div>

      </div>
   
  
</> )
}

export default Card;