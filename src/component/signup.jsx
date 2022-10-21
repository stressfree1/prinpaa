import React,{useState} from "react";
import {useNavigate} from "react-router-dom";


function SignUp(){

    const[isMouseOver, setMouseOver]=useState(false);
    const navigate = useNavigate();
    function handleOver(){
      setMouseOver(true)

    }

    function handleOut(){
      setMouseOver(false)
    }

    function submitNote(event){
    event.preventDefault();

    }
    return (<form className="form">
    <h1>SIGN UP</h1>
    <input name="email" type="text" placeholder=" Email"/>
    <input name="password"type="password" placeholder=" Password"/>
    <input name="comfirm" type="password" placeholder="cofirm password"/>
    <button
    type="submit"
    onClick={() =>{
        navigate("/Home")
    }
     }
    onMouseOver={handleOver}
    onMouseOut={handleOut}
    style={{backgroundColor:isMouseOver? "black" : "white"}}
    >
     Register
    </button>
     </form>)
}

export default SignUp;
