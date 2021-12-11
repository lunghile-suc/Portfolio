import { SocialIcon } from 'react-social-icons';
import { greetings, socialLinks } from '../content';
import style from '../styles/Hero.module.scss';

const Navbar = () => {
    return (
        <div className={style.navBg}>
            <div className="container" >
                <nav className={style.nav}>
                    <div className={style.logo}>{greetings.name}</div>
                    <div className={style.socialLinks}>
                        <SocialIcon style={{ height: 35, width: 35 }} bgColor="#F2F2F2" url={socialLinks.twitter} />
                        <SocialIcon style={{ height: 35, width: 35 }} bgColor="#F2F2F2" url={socialLinks.linkedin} />
                        <SocialIcon style={{ height: 35, width: 35 }} bgColor="#F2F2F2" url={socialLinks.github} />
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;