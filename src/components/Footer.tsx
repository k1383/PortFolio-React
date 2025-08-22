// Icons
import { FaGithub } from "react-icons/fa"; // GitHub  <FaGithub />
import { FaLinkedinIn } from "react-icons/fa"; // Linkedin  <FaLinkedinIn />

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
                         <FaGithub id="GitHub"/>
                         <FaLinkedinIn id="Linkedin"/>
                    </div>
                    <p>© 2025 Cournut Kantin. Tous droits réservés.</p>
               </article>

          </div>
    </footer>
};

export default Footer;