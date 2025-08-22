import { Link } from 'react-router-dom';
import '../style/Header.scss'

const Header = () => (
    
    <header className="container">
        <h1>Cournut Kantin</h1>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/About">À propos</Link>
            <Link to="/Projects">Projets</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
    </header>
   
);

export default Header;