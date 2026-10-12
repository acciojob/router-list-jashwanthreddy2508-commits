
function Itemdetails({item}){

  const {id}=useParams()
return(
  <div>
  <h1 key={item.id}>{item.name}</h1>
    <h4>{item.age}</h4>
    <p>{item.description}</p>
  
  </div>
  
)
  }
