import Head from 'next/head';
import Link from 'next/link'
import { createClient } from "contentful";
import style from '../styles/Projects.module.scss';
import { FaLongArrowAltLeft } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";

export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    });

    const response = await client.getEntries({ content_type: 'projects' })

    return {
        props: {
            projects: response.items
        }
    }
}

const Projects = ({ projects }) => {
    return (
        <>
            <Head>
                <title>Lunghile | Web developer Portfolio</title>
                <meta name="title" content="Lunghile | Web developer Portfolio" />
                <meta name="author" content="Lunghile" />
                <meta name="description" content="A Creative Web Developer and Freelancer with a passion of building web applications using a various technologies and Languages" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="" />
                <link rel="icon" href="/images/logo.svg" />
            </Head>
            <section className={style.projectsSection}>
                <div className="container">
                    <div className={style.projectsHeaders}>
                        <h1 className="sectionTitle">Projects</h1>
                        <h3>My Work</h3>
                    </div>
                    <div className={style.projectsCards}>
                        {projects.map((project) => {
                            return (
                                <ProjectCard key={project.sys.id} project={project} />
                            )
                        })}
                    </div>
                    <Link href="/"><a className={style.moreProjects}><FaLongArrowAltLeft /> BACK HOME</a></Link>
                </div>
            </section>
        </>
    );
}

export default Projects;