import React from "react"
import {Link, useMatch, useNavigate, useResolvedPath} from "react-router-dom";
import Search from "./search";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";

function Navbar(){

  return(
    <nav className="Navbar">
      <h1>Prinpaa</h1>
      <ul>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/home">Home</CustomLink>
      </ul>
    </nav>

  )
}

function CustomLink({to,children,...props}){
  const ResolvedPath = useResolvedPath(to)
  const isActive = useMatch({path:ResolvedPath.pathname, end:true})

return(
  <li className={isActive?"active":""}>
  <Link  to={to} {...props} >{children}</Link>
  </li>
)
}



export default Navbar;
