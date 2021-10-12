import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import "./Nav.css"

function Nav() {
const [show, handleShow] = useState(false);

const transitionNavbar = () => {
    if(window.scrollY > 100) {
        handleShow(true);
    }
    else{
        handleShow(false);
    }
};

useEffect(() =>{
    window.addEventListener("scroll",transitionNavbar);
    return () => window.removeEventListener("scroll",transitionNavbar);
},[]);

    return (
        <div className={`nav  ${show && "nav__black"}`}>
            <div className="nav__contents">
                <Link to="/">
                <img className="nav__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="" />
                </Link>
                <Link to="/profile">
                <img 
                className="nav__avatar" src="https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png"
                    alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Nav
