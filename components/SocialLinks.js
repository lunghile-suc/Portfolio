import { SocialIcon } from "react-social-icons";
import style from "../styles/SocialLinks.module.scss";
import { socialLinks } from "../content";
import DisplayLottie from "./DisplayLottie";
import Social from '../public/lottie_files/social-media.json';
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <section className={style.socialLinks}>
            <div className="container">
                <div className={style.socialItems}>
                    <div className={style.socialContent}>
                        <h1 className={style.sectionTitle}>Let's Connect</h1>
                        <p>I am always looking to make new friends, so if you want to discuss an exciting project or you just want to say Hi!, My inbox is always open</p>
                        <a href="mailto:Lunghilesuccess1@gmail.com" className={style.c_Icon}><FaEnvelope className={style.icon} />Lunghilesuccess1@gmail.com</a>
                        <a href="tel:0784529530" className={style.c_Icon}><FaPhoneAlt className={style.icon} />078 452 9530</a>
                        <div className={style.socialIcons}>
                            <SocialIcon url={socialLinks.twitter} bgColor="#F2F2F2" className={style.socialIcon} />
                            <SocialIcon url={socialLinks.linkedin} bgColor="#F2F2F2" className={style.socialIcon} />
                            <SocialIcon url={socialLinks.github} bgColor="#F2F2F2" className={style.socialIcon} />
                        </div>
                    </div>
                    <div className={style.lottie}>
                        <DisplayLottie lotti={Social} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SocialLinks;