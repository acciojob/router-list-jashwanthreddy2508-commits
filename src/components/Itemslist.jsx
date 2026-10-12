import React from "react";
import {Link} from "react-router-dom";


function Itemlist() {
const list = [
{
id:1,
name: "jashu",
age: 21,
description: "I am Jashu"
},
{
  id:2,
name: "nandu",
age: 21,
description: "I am nandu"
},
{
id:3,
name: "vineeth",
age: 21,
description: "I am vineeth"
}
];

return ( <div> <ul>
{
list.map((item) => ( 
  <li key={item.id}>
   <Link to={`/Itemdetails/${item.id}`}>{item.name}</Link>
  </li>
))}
</ul>
</div>
);
}

export default Itemlist;
