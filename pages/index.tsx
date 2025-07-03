import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Akif Qureshi | Software Engineer</title>
        <meta name="description" content="Akif Qureshi's Software Engineering Portfolio - Crafting elegant solutions through code." />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
} 