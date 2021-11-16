import { projects } from "../content";
import style from '../styles/Projects.module.scss';
import { FaLongArrowAltRight } from "react-icons/fa";

const Projects = () => {
    return (
        <section className={style.projectsSection}>
            <div className="container">
                <div className={style.projectsHeaders}>
                    <h1 className="sectionTitle">Projects</h1>
                    <h3>{projects.title}</h3>
                </div>
                <div className={style.projectsCards}>
                    {projects.projectsInfo.slice(0, 3).map((info, i) => {
                        return (
                            <a href="" target="_blank" key={i}>
                                <div className={style.projectCard}>
                                    <img src={info.image} alt="project-img"></img>
                                    <div className={style.cardContent}>
                                        <div className={style.overlay}></div>
                                        <h1>{info.title}</h1>
                                        <p>{info.description}</p>
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
                <a href="" className={style.moreProjects}>MORE OF MY WORK <FaLongArrowAltRight /></a>
            </div>
        </section>
    );
}

export default Projects;