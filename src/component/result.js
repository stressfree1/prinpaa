import React from "react";
import detail from "./detail";
import Card from "./card";

function createCard(detail){
    return < Card
        key={detail.key}
        name={detail.name}
        job={detail.job}
        img={detail.img}
        about={detail.about}
    />

   }

function Sard(){
    return(
    <div>
        {detail.map(createCard)}
    </div>)
}


export default Sard;