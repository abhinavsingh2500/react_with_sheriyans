function Card(props){
    console.log(props);
    return (<>
    <div>
        <h1>{props.name}</h1>
        <p>This is a card for {props.name} whose age is {props.age}</p>
      <button>View Profile</button>
    </div>
    </>)
    }
    export default Card;