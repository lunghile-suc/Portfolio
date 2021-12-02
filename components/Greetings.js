import { greetings, socialLinks } from '../content';
import style from '../styles/Hero.module.scss';
import { SocialIcon } from 'react-social-icons';


const Greetings = () => {
    return (
        <section className={style.heroSection}>
            <div className="container">
                <nav className={style.nav}>
                    <div className={style.logo}>{greetings.name}</div>
                    <div className={style.socialLinks}>
                        <SocialIcon style={{ height: 35, width: 35 }} bgColor="#F2F2F2" url={socialLinks.twitter} />
                        <SocialIcon style={{ height: 35, width: 35 }} bgColor="#F2F2F2" url={socialLinks.linkedin} />
                        <SocialIcon style={{ height: 35, width: 35 }} bgColor="#F2F2F2" url={socialLinks.github} />
                    </div>
                </nav>
                <div className={style.headerContents}>
                    <div className={ style.headerContent }>
                        <h1>{greetings.title}</h1>
                        <p>{greetings.description}</p>
                        <a href="https://drive.google.com/file/d/19o8HxPWhzeOA43GxCL9ye_7j-FE8vrAj/view?usp=sharing" target="_blank">Resume</a>
                    </div>
                    <div className={style.heroImg}>
                        <img src='/images/heroImage.svg' alt="hero-image"></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Greetings;