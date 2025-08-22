import { Link } from 'react-router-dom';
import '../style/Header.scss'

// Icons
import { CiMenuFries } from "react-icons/ci"; // BugerMenu  <CiMenuFries />

const Header = () => (
    
    <header className="container">
        <h1>Cournut Kantin</h1>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/About">À propos</Link>
            <Link to="/Projects">Projets</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
        <CiMenuFries id='Bugermenu'/>
    </header>
   
);

export default Header;