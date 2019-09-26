import React from "react";
import './card.css'

function Cards(props) {
   
let data = props.data;
// console.log(data,"cardsasas");

  return (
    <div>
         {data.cards.map((items, Index) => {
           return(
             <div className='card'>
               {items.label} 
              </div>
           )
           
          })}
    </div>
  );
}
  
export default Cards;