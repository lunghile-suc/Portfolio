import Footer from "../components/Footer";
import Greetings from "../components/Greetings";
import Projects from "../components/Projects";
import Services from "../components/Services";
import SocialLinks from "../components/SocialLinks";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lunghile | Web developer Portfolio</title>
        <meta name="title" content="Lunghile | Web developer Portfolio" />
        <meta name="author" content="Lunghile" />
        <meta name="description" content="A Creative Web Developer and Freelancer with a passion of building web applications using a various technologies and Languages" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="" />
        <link rel="icon" href="" />
      </Head>
      <Greetings />
      <Services />
      <Projects />
      <SocialLinks />
      <Footer />
    </div>
  )
}
