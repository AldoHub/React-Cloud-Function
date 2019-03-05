import React from 'react';
import {Link} from "react-router-dom";

//import the image
import chatting from "../images/27082 [Converted].svg";

const Header = () => (
    <header>
    <nav>
        <ul>
            <li><Link to="/">ReactCoud</Link></li>
        </ul>
        <ul>
            <li><Link to="/">Phrases</Link></li>
            <li><Link to="/addphrase">Add Phrase</Link></li>
        </ul>
    </nav>
        <h1>React Cloud Phrases</h1> 
        <img className="hero" src={chatting} />
         
    </header>
 
);        
    
export default Header;