import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import '../style/Home.scss'
import { FaArrowRight } from "react-icons/fa6"; // Arrow right <FaArrowRight />
import { FaReact } from "react-icons/fa"; // React  <FaReact />
import { FaHtml5 } from "react-icons/fa"; // HTML <FaHtml5 />
import { FaCss3Alt } from "react-icons/fa"; // CSS <FaCss3Alt />
import { IoLogoJavascript } from "react-icons/io5"; // JavaScript <IoLogoJavascript />
import { FaPhp } from "react-icons/fa"; // Php <FaPhp />
import { FaNodeJs } from "react-icons/fa"; // Nodejs  <FaNodeJs /> 

const Home = () => {
    return (
        <>
            <header className="container">
                <h1>Cournut Kantin</h1>
                <Navbar /> 
            </header>

            <main>
                <section id="Introduction">
                    <div className="container">
                        <article id="presentation">
                            <h2>Cournut Kantin</h2>
                            <p>Développeur Web</p>
                            <p>Je crée des expériences web élégantes, intuitives et </p>
                            <p>performantes avec une attention particulière aux détails.</p>
                            <button><a href="./Projects">Voir mes projets</a></button>
                        </article>
                        <img src="../image/pdp.jpg" alt="Image" />
                    </div>
                </section>
                
                <section id="About" className="container">
                    <h3>À propos de moi</h3>
                    <div id="div1">
                        <article>
                            <h4>Mon parcours</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, cupiditate totam! Amet vero natus unde dolor, vel laudantium praesentium eveniet sit totam sequi omnis excepturi libero dicta voluptatem quaerat doloremque!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis amet, alias quas tempora, enim tempore dolore nulla fuga non cum eaque quis adipisci. A magnam qui totam tenetur porro! Voluptatibus..</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt mollitia, ab dolorem ullam hic sit, itaque molestiae voluptatibus, provident eum ducimus aliquam iste atque illum ad facilis ipsa obcaecati a..</p>
                            <a href="">En savoir plus sur mon parcours <FaArrowRight /></a>
                        </article>

                        <article>
                            <h4>Mes compétences</h4>
                            <div>
                                <FaHtml5 />
                                <FaCss3Alt />
                                <IoLogoJavascript />
                                <FaPhp />
                                <FaNodeJs /> 
                                <FaReact />
                            </div>
                        </article>
                    </div>
                </section>

                <section id="Projects">
                    <article id="Intro">
                        <h5>Mes projets récents</h5>
                        <p>Découvrez une sélection de mes travaux récents qui démontrent mes compétences en développement web et design d'interface.</p>
                    </article>
                    <div className="container" id="div2">
                        <article className="Project_Display">
                            <img src="../image/JohnDoe.png" alt="Image" />          
                            <div className="Info">
                                <p className="nameproject">John Doe</p>
                                <p className="descriptionproject">Lorem ipsum dolor sit amet consectetur.</p>
                                <a href="https://github.com/k1383/John-Doe-">Voir le projet <FaArrowRight /></a>
                            </div>
                        </article>
                        <article className="Project_Display">
                            <img src="../image/HomeKey.png" alt="Image" />          
                            <div className="Info">
                                <p className="nameproject">Home Key</p>
                                <p className="descriptionproject">Lorem ipsum dolor sit amet consectetur.</p>
                                <a href="https://github.com/k1383/Home-Key">Voir le projet <FaArrowRight /></a>
                            </div>
                        </article>
                        <article className="Project_Display">
                            <img src="../image/Oraculus.png" alt="Image" />          
                            <div className="Info">
                                <p className="nameproject">Oraculus</p>
                                <p className="descriptionproject">Lorem ipsum dolor sit amet consectetur.</p>
                                <a href="https://github.com/k1383/Oraculus">Voir le projet <FaArrowRight /></a>
                            </div>
                        </article>
                    </div>
                    <button><a href="#">Voir tous les projets </a></button>
                </section>

                <section id="Contact">
                    <h6>Contactez-moi</h6>
                    <p>Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter, je  <br />vous répondrai dans les plus brefs délais.</p>
                    <form className="container" action="#" method="post" id="myForm">
                        <article>
                            <div className="formgroup">
                                <label htmlFor="name">Nom</label>
                                <input type="name" required/>
                            </div>
                            <div className="formgroup">
                                <label htmlFor="email">Email</label>
                                <input type="email" required/>
                            </div>
                        </article>
                        <div id="div4">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" required />
                        </div>
                        
                        <button type="submit" id="submit">Envoyer le message</button>
                    </form>
                </section>
            </main>

            <Footer />  
        </>
    );
};

export default Home;