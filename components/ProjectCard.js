import style from '../styles/Projects.module.scss';
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    return (
        <a href={project.fields.projectLink} target="_blank" rel="noreferrer">
            <div className={style.projectCard}>
                <img src={'https:' + project.fields.image.fields.file.url} alt="project Image"></img>
                <div className={style.cardContent}>
                    <div className={style.overlay}></div>
                    <h1>{project.fields.title}</h1>
                    <p>{project.fields.descripition}</p>
                    <a href={project.fields.projectLink} target="_blank" rel="noreferrer"><FaExternalLinkAlt className={style.externalLink}/></a>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;