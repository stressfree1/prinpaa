import React from "react";
import {useNavigate} from "react-router-dom";

function Search(){

  const navigate = useNavigate();
  
  
  function submitNote(event){
    
    navigate("/result")
   
    event.preventDefault();
  }
    return(
      <form className="form">
        <input className="form" name="entry" placeholder="search patient"/>

      <button onClick={submitNote}>
        search
      </button>
      
      </form>

    )


    }

export default Search;

