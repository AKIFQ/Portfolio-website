import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Akif Qureshi | Software Engineer</title>
        <meta name="description" content="Akif Qureshi's Software Engineering Portfolio - Crafting elegant solutions through code." />
        <link rel="icon" href="/favicon-32x32.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation />
      <main id="home">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
} 