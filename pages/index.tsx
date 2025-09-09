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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index,follow" />
        {/* Icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://akifq.github.io/Portfolio-website/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Akif Qureshi | Software Engineer" />
        <meta property="og:description" content="Portfolio showcasing AI systems, full-stack work, and selected projects." />
        <meta property="og:url" content="https://akifq.github.io/Portfolio-website/" />
        <meta property="og:image" content="https://akifq.github.io/Portfolio-website/profile-pic.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Akif Qureshi | Software Engineer" />
        <meta name="twitter:description" content="Portfolio showcasing AI systems, full-stack work, and selected projects." />
        <meta name="twitter:image" content="https://akifq.github.io/Portfolio-website/profile-pic.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Akif Azher Qureshi',
              url: 'https://akifq.github.io/Portfolio-website/',
              sameAs: [
                'https://github.com/AKIFQ',
                'https://www.linkedin.com/in/akifqureshi/'
              ],
              jobTitle: 'Software Engineer',
              description: "Akif Qureshi's Software Engineering Portfolio",
            }),
          }}
        />
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