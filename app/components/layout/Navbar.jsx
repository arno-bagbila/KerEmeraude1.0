import React from "react";
import NavbarLink from "./NavbarLink.jsx";

export default class Navbar extends React.Component{
  render(){
    return(
     <div>
        <ul className="nav navbar-nav">
            <li id="menuHome"><NavbarLink to="/home"><h3>Ker Emeraude</h3></NavbarLink></li>
            <li id="menuAbout"><NavbarLink to="/about"><h4>About</h4></NavbarLink></li>
            <li id="menuAdor"><NavbarLink to="/ador"><h4>Ador / Palma de Gandia</h4></NavbarLink></li> 
            <li id="menuContact"><NavbarLink to="/contact"><h4>Contact</h4></NavbarLink></li> 
        </ul>
     </div>
    );
  }
}
