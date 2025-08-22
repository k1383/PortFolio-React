import { FaArrowRight } from "react-icons/fa6"; // Arrow right <FaArrowRight />
import '../style/Projects.scss'

type ProjectsCardProsp = {
    image: string;
    title: string;
    description: string;
    Link: string;
};

const ProjectsCard: React.FC<ProjectsCardProsp> = ({ image, title, description, Link }) => (
    <section id="Projects">
        <div className="container" id="div2">
            <article className="Project_Display">
                <img src={image} alt={title} />
                <div className="Info">
                    <h3>{title}</h3>
                    <p className="descriptionproject">{description}</p>
                    <a href={Link}>Voir le projet <FaArrowRight /></a>
                </div>
            </article>
        </div>
    </section>
);

export default ProjectsCard