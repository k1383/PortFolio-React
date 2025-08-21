import { useEffect, useState } from "react";
import ProjectsCard from "../components/ProjectCard";
import data from '../data/Projects.json';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import '../style/Projects.scss'

type Project = {
    id: number;
    image: string;
    title: string;
    description: string;
    Link: string;
}

const Projects = () => {
    const [projects, setProjects] = useState<Project[]> ([]);

    useEffect(() => {
        setProjects(data);
    }, []);
    return (
        <>
            <header className="container">
                <h1>Cournut Kantin</h1>
                <Navbar /> 
            </header>
 
            <main>
                <section id="Projects">
                    <div className="container" id="div2">
                        <article className="Project_Display">
                            {projects.map((projects) => (
                                <ProjectsCard 
                                    key={projects.id}
                                    image={projects.image} 
                                    title={projects.title}
                                    description={projects.description}
                                    Link={projects.Link}
                                />
                            ))}
                        </article>
                    </div>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>

        </>
    );
};

export default Projects

