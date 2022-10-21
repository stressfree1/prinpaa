import React,{useState} from "react";
import "./card.css";
import cardDetail from "./detail";
console.log(cardDetail)


function Card(){

     const [detail,setDetail]=useState(cardDetail)
    
    return(
        
            
        detail.map((detail)=>{
            return(   
            <div className="Card">
                <div className="upper-container">
                    <div className="image-container">
                        <img src={detail.img} alt="" height="100px" width="100px"/>
                    </div>
                </div>
                <div className="lower-container">
                    <h3>{detail.name}</h3>
                    <h4>{detail.job}</h4>
                    <p>{detail.about}</p>
                    <button>see more</button>
                </div>
          </div>
                
            )
            })
    )
}

export default Card;