import type { AppProps } from 'next/app';
import '../styles/globals.css';
// Keep global CSS only; avoid bundling gsap globally unless needed in specific components

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}