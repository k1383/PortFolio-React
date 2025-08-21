type ProjectsCardProsp = {
    image: string;
    title: string;
    description: string;
    Link: string;
};

const ProjectsCard: React.FC<ProjectsCardProsp> = ({ image, title, description, Link}) => (
    <div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={Link}>Voir le projet</a>
    </div>
);

export default ProjectsCard