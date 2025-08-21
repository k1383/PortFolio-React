import { useEffect, useState } from "react";
import ProjectsCard from "../components/ProjectCard";
import '../style/Projects.scss'
import data from '../data/Projects.json';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

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

            <Footer />
            
        </>
    );
};

export default Projects