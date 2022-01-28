import Greetings from "../components/Greetings";
import Projects from "../components/Projects";
import Services from "../components/Services";
import SocialLinks from "../components/SocialLinks";
import Head from "next/head";
import { createClient } from "contentful";

export async function getStaticProps(){

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const response = await client.getEntries({ content_type: 'projects'})

  return{
    props: {
      projects: response.items
    }
  }
}

export default function Home({projects}) {
  return (
    <div>
      <Head>
        <title>Lunghile | Web developer Portfolio</title>
        <meta name="title" content="Lunghile | Web developer Portfolio" />
        <meta name="author" content="Lunghile" />
        <meta name="description" content="A Creative Web Developer and Freelancer with a passion of building web applications using a various technologies and Languages" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Greetings />
      <Services />
      <Projects projects={projects}/>
      <SocialLinks />
    </div>
  )
}
