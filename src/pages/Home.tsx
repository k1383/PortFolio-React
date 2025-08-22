// Scss
import '../style/Home.scss'

/* Components */
import Header from "../components/Header"
import About from "../components/About"
import Contact from "../components/Contact";
import Footer from "../components/Footer"

// Icons
import { FaArrowRight } from "react-icons/fa6"; // Arrow right  <FaArrowRight />

const Home = () => {
    return (
        <>
            <Header /> 

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
                
                <About />

                <section id="Projects">
                    <article id="Intro">
                        <h2>Mes projets récents</h2>
                        <p>Découvrez une sélection de mes travaux récents qui démontrent mes compétences en développement web et design d'interface.</p>
                    </article>
                    <div className="container" id="div2">
                        <article className="Project_Display">
                            <img src="../image/JohnDoe.png" alt="Image" />          
                            <div className="Info">
                                <h3>John Doe</h3>
                                <p className="descriptionproject">Lorem ipsum dolor sit amet consectetur.</p>
                                <a href="https://github.com/k1383/John-Doe-">Voir le projet <FaArrowRight className="icon-arrow"/></a>
                            </div>
                        </article>
                        <article className="Project_Display">
                            <img src="../image/HomeKey.png" alt="Image" />          
                            <div className="Info">
                                <h3>Home Key</h3>
                                <p className="descriptionproject">Lorem ipsum dolor sit amet consectetur.</p>
                                <a href="https://github.com/k1383/Home-Key">Voir le projet <FaArrowRight className="icon-arrow"/></a>
                            </div>
                        </article>
                        <article className="Project_Display">
                            <img src="../image/Oraculus.png" alt="Image" />          
                            <div className="Info">
                                <h3>Oraculus</h3>
                                <p className="descriptionproject">Lorem ipsum dolor sit amet consectetur.</p>
                                <a href="https://github.com/k1383/Oraculus">Voir le projet <FaArrowRight className="icon-arrow"/></a>
                            </div>
                        </article>
                    </div>
                    <button><a href="./Projects">Voir tous les projets </a></button>
                </section>
                
                <Contact /> 
            </main>

            <Footer />  
        </>
    );
};

export default Home;