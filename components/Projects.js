import Link from 'next/link';
import style from '../styles/Projects.module.scss';
import { FaLongArrowAltRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
    return (
        <section className={style.projectsSection}>
            <div className="container">
                <div className={style.projectsHeaders}>
                    <h1 className="sectionTitle">Projects</h1>
                    <h3>My Work</h3>
                </div>
                <div className={style.projectsCards}>
                    {projects.slice(0, 3).map((project) => {
                        return (
                            <ProjectCard key={project.sys.id} project={project}/>
                        )
                    })}
                </div>
                <Link href="/projects"><a className={style.moreProjects}>MORE OF MY WORK <FaLongArrowAltRight /></a></Link>
            </div>
        </section>
    );
}

export default Projects;