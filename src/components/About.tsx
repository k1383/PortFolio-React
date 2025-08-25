// Scss
import '../style/About.scss'

// Icons
import { FaReact } from "react-icons/fa"; // React  <FaReact />
import { FaHtml5 } from "react-icons/fa"; // HTML  <FaHtml5 />
import { FaCss3Alt } from "react-icons/fa"; // CSS  <FaCss3Alt />
import { IoLogoJavascript } from "react-icons/io5"; // JavaScript  <IoLogoJavascript />
import { FaPhp } from "react-icons/fa"; // Php  <FaPhp />
import { FaNodeJs } from "react-icons/fa"; // Nodejs  <FaNodeJs /> 
import { FaFigma } from "react-icons/fa"; // Figma  <FaFigma />
import { FaWordpress } from "react-icons/fa"; // Wordpress  <FaWordpress />
import { FaArrowRight } from "react-icons/fa6"; // Arrow right  <FaArrowRight />
import { FaGithub } from "react-icons/fa"; //  GitHub  <FaGithub />

const About = () => {
    return <section id="About" className="container">
        <h2>À propos de moi</h2>
        <div id="div1">
            <article>
                <h3>Mon parcours</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, cupiditate totam! Amet vero natus unde dolor, vel laudantium praesentium eveniet sit totam sequi omnis excepturi libero dicta voluptatem quaerat doloremque!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis amet, alias quas tempora, enim tempore dolore nulla fuga non cum eaque quis adipisci. A magnam qui totam tenetur porro! Voluptatibus..</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt mollitia, ab dolorem ullam hic sit, itaque molestiae voluptatibus, provident eum ducimus aliquam iste atque illum ad facilis ipsa obcaecati a..</p>
                <a href="./About">En savoir plus sur mon parcours <FaArrowRight className="icon-arrow"/></a>
            </article>

            <article>
                <h3>Mes compétences</h3>
                <div>
                    <article>
                        <FaHtml5 className="icon"/> 
                        <FaCss3Alt className="icon"/>
                        <IoLogoJavascript className="icon"/>
                        <FaNodeJs className="icon"/> 
                        <FaPhp className="icon"/>
                        <FaReact className="icon"/>
                        <FaFigma className="icon"/>
                        <FaWordpress className="icon"/>
                        <FaGithub className="icon"/>
                    </article>
                </div>
            </article>
        </div>
    </section>
};

export default About;