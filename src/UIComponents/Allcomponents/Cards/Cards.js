import React from "react";
import './cards.css'

function Cards(props) {
   
let data = props.data;
// console.log(data,"cardsasas");

  return (
    <div>
         {data.cards.map((items, Index) => {
           return(
             <div className='card' style={{ color: items.color}}>
               {items.label} 
              </div>
           )
          })}
    </div>
  );
}
  
export default Cards;