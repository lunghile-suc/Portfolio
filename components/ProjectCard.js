import style from '../styles/Projects.module.scss';

const ProjectCard = ({ project }) => {
    return (
        <a href={project.fields.projectLink} target="_blank" rel="noreferrer">
            <div className={style.projectCard}>
                <img src={'https:' + project.fields.image.fields.file.url} alt="project Image"></img>
                <div className={style.cardContent}>
                    <div className={style.overlay}></div>
                    <h1>{project.fields.title}</h1>
                    <p>{project.fields.descripition}</p>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;