import { greetings} from '../content';
import style from '../styles/Hero.module.scss';
import Navbar from './Navbar';


const Greetings = () => {
    return (
        <section className={style.heroSection}>
            <div className="container">
                <div className={style.headerContents}>
                    <div className={ style.headerContent }>
                        <h1>{greetings.title}</h1>
                        <p>{greetings.description}</p>
                        <a href="https://drive.google.com/file/d/19o8HxPWhzeOA43GxCL9ye_7j-FE8vrAj/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
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