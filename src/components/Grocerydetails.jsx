import React, { useState } from "react"
import data from '../data.json'


const GroceryDetails = ()=>{
console.log(data)

const [Data] = useState(data);
    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
      { Data.map((item) =>{
          console.log(item.title)
       return(
           <>
           
           <img src="item.imgURL" alt="logo" />
        <h2>{item.title}</h2>
        <p>{item.discount}</p>
        <h3>{item.sellingPrice}</h3>
        <p>MRP:<s> {item.mrp}</s></p>

        </>
       )
        
       
       })
       
    }
      
        </div>
        </>
    )
}
export default GroceryDetails