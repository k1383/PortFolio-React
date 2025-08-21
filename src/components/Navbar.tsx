import { Link } from 'react-router-dom';

const Navbar = () => (
    
    <nav>
        <Link to="/">Accueil</Link>
        <Link to="/About">À propos</Link>
        <Link to="/Projects">Projets</Link>
        <Link to="/Contact">Contact</Link>
    </nav>
   
);

export default Navbar;