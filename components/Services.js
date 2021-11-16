import { services } from "../content";
import style from '../styles/Services.module.scss';
import Image from "next/dist/client/image";
import DisplayLottie from '../components/DisplayLottie';
import ServicesLottie from '../public/lottie_files/services-lottie.json';

const Services = () => {
    return (
        <section className={style.servicesSection}>
            <div className="container">
                <div className={style.items}>
                    <div className={style.lottieCard}>
                        <DisplayLottie lotti={ServicesLottie} />
                    </div>
                    <div className={style.servicesContents}>
                        <div className={style.servicesContent}>
                            <h1 className="sectionTitle">Services</h1>
                            <h3>{services.title}</h3>
                            <p>{services.description}</p>
                        </div>
                    </div>
                </div>
                <div className={style.servicesCards}>
                    {services.servicesInfo.map((info, i) => {
                        return (
                            <div key={i} className={style.servicesCard}>
                                <div><img src={info.image} className={style.Image}></img></div>
                                <div>
                                    <h1>{info.title}</h1>
                                    <p>{info.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Services;