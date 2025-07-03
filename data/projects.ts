export interface Project {
  name: string;
  image: string;
  github: string;
  live: string;
  description: string;
  features: string[];
  challenges: string[];
  tech: string[];
}

export const projects: Project[] = [
  {
    name: 'Ordelo',
    image: 'ordelo.png',
    github: 'https://github.com/AKIFQ/ordelo',
    live: 'https://ordelo.vercel.app',
    description: 'Ordelo is a full-stack web platform that lets home-cooks discover recipes and, in one click, turn them into a vendor-ready grocery order—complete with real-time pricing, automatic unit conversion, and live delivery tracking.',
    features: [
      'Smart recipe discovery with advanced filters & AI-powered suggestions',
      'One-click shopping list & cart – converts servings → exact vendor units automatically',
      'Vendor management dashboard (inventory sync, pricing & order fulfilment)',
      'Real-time order tracking with status notifications and offline-ready PWA caching',
    ],
    challenges: [
      'Spoonacular API rate-limit mitigation via Redis + local fallback cache',
      'Data consistency across React frontend, Go micro-services & MongoDB collections',
      'Live updates (WebSocket + Redis pub/sub) without blocking core requests',
      'End-to-end Dockerised CI/CD from local dev → Cloudflare Pages / Workers',
    ],
    tech: ['React (Vite)', 'Tailwind CSS', 'Framer Motion', 'Go (Gin)', 'MongoDB'],
  },
  {
    name: 'Ether Wallet',
    image: 'ether.png',
    github: 'https://github.com/AKIFQ/ether-wallet',
    live: 'https://ether-wallet-green.vercel.app',
    description: '',
    features: [],
    challenges: [],
    tech: [],
  },
]; 