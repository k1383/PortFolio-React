import { useEffect, useState } from "react";

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
                <h2>Mes projets</h2>
                {projects.map((projects) => (
                    <ProjectsCard 
                        key={projects.id}
                        image={projects.image} 
                        title={projects.title}
                        description={projects.description}
                        Link={projects.Link}
                    />
                ))}
            </main>

            <Footer />
            
        </>
    );
};

export default Projects