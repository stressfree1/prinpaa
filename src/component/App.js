import React from "react";
import Footer from "./footer";
import Login from "./login";
import Search from "./search";
import SignUp from "./signup";
import Navbar from "./navbar";
import Contact from "./pages/contact";
import About from "./pages/about";
import Home from "./pages/home";
import Card from "./card"
import  {BrowserRouter as Router, Routes,Route} from "react-router-dom";





function App() {
  return (
    
      <Router>
        <Navbar/>
        <div className="container">
        <Routes>
          <Route path="/result" element={<Card/>}/> 
          <Route path="/search" element={<Search/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/" element={<SignUp/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="/about" element={<About/>}/>          
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
        <Footer/> 
      </Router>
      
                       
   );
}

export default App;
