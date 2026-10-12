import React from "react";
import { useParams } from "react-router-dom";

function Itemdetails() {
const { id } = useParams();

const list = [
{ id: 1, name: "jashu", age: 21, description: "I am Jashu" },
{ id: 2, name: "nandu", age: 21, description: "I am nandu" },
{ id: 3, name: "vineeth", age: 21, description: "I am vineeth" }
];

const item = list.find((person) => person.id === Number(id));

if (!item) {
return <h1>Item not found</h1>;
}

return ( 
  <div> 
    <h1>{item.name}</h1> 
    <h4>{item.age}</h4> 
    <p>{item.description}</p> </div>
);
}

export default Itemdetails;
