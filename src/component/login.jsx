import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import Search from "./search";
import SignUp from "./signup";
import Image from "./AppBreweryWallpaper 1.jpg"

function Login(){
  const[isMouseOver, setMouseOver]=useState(false);
  const [input, setInput] = useState({
    email:"",
    password:""
    });
    
  const navigate = useNavigate();
    
  function handleChange(event){
    const{name, value}= event.target;

    setInput(prevInput => {

      return{...prevInput,
        [name]:value

        }
      })
    }
    
    
    function handleOver(){
      setMouseOver(true)

    }

    function handleOut(){
      setMouseOver(false)
    }

    function submitNote(event){

      navigate("/Search")
   
    setInput({
        email:"",
        password:""
      })
    event.preventDefault();

    }
    return(
    <form className="form" autoComplete="off">
    <h1>Welcome To Prinpaa</h1>
    <input name="email" type="text" onChange={handleChange} value={input.email} placeholder=" Email" autoComplete="off"/>
    <input name="password" type="password" onChange={handleChange} value={input.password} placeholder=" Password"/>
    <button
    type="submit"
    onClick={submitNote}
    onMouseOver={handleOver}
    onMouseOut={handleOut}
    style={{backgroundColor:isMouseOver? "black" : "white"}}
    >Login
    </button>
    
    <p>OR</p>

    <button
        type="submit"
        onClick={() =>{
            navigate("/SignUp")
        }
         }
        >Sign up
        </button>
        

 
    
    
    </form>)
}

export default Login;
