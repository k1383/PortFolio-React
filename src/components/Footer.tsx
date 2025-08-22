import { FaGithub } from "react-icons/fa"; // Icons
import '../style/Footer.scss'
const Footer = () => {
    return <footer>
          <div className="container">
               <article>
                    <p>Cournut Kantin</p>
                    <p>Développeur web</p>
               </article>
               
               <article>
                    <div id="Icons">
                         <FaGithub />
                    </div>
                    <p>© 2025 Cournut Kantin. Tous droits réservés.</p>
               </article>

          </div>
    </footer>
};

export default Footer;