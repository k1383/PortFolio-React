import { Link } from 'react-router-dom';
// import {useEffect, useState } from 'react';
import '../style/Header.scss'

// Icons
import { CiMenuFries } from "react-icons/ci"; // BugerMenu  <CiMenuFries />

const burgermenu = (e: React.MouseEvent<HTMLButtonElement>) => {
	console.log(nav);
};

const Header = () => (
    
    <header className="container">
        <h1>Cournut Kantin</h1>
        <span onClick={burgermenu}><CiMenuFries id='Bugermenu'/></span>    
        {/* <CiMenuFries id='Bugermenu'/> */}
        <nav id='nav'>
            <Link to="/">Accueil</Link>
            <Link to="/About">À propos</Link>
            <Link to="/Projects">Projets</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
    </header>
   
);

export default Header;