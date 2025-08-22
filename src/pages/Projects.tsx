import { useEffect, useState } from "react";

/* Scss */
import '../style/Projects.scss'

/* Components */
import ProjectsCard from "../components/ProjectCard";
import Header from "../components/Header"
import Footer from "../components/Footer"

import data from '../data/Projects.json';

type Project = {
    id: number;
    image: string;
    title: string;
    description: string;
    SeeTheProject: string;
    Link: string;
}

const Projects = () => {
    const [projects, setProjects] = useState<Project[]> ([]);

    useEffect(() => {
        setProjects(data);
    }, []);
    return (
        <>
            <Header /> 
 
            <main>
                <section id="Projects">
                    <h2>Mes projets</h2>
                    <div className="container" id="div2">
                        {projects.map((projects) => (
                            <ProjectsCard 
                                key={projects.id}
                                image={projects.image} 
                                title={projects.title}
                                description={projects.description}
                                SeeTheProject={projects.SeeTheProject}
                                Link={projects.Link}
                            />
                            ))}
                        </div>
                        <p>1</p>
                </section>
            </main>

            <Footer />
            
        </>
    );
};

export default Projects