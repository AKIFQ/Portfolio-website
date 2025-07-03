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
    description: 'Your own secure on-ramp to the Ethereum network — connect, send, interact, done.',
    features: [
      'One-click wallet connect — EIP-1193 support for MetaMask, WalletConnect v2, and hardware wallets via WebHID',
      'Gas-smart sends — live fee estimator, auto-suggests slow/average/fast gas limits based on current network congestion',
      'Smart-contract console — drop an ABI → get an auto-generated form UI to read/write any public method',
      'Real-time status toasts — websockets + ethers.js listeners push Tx lifecycle updates ("pending → confirmed (# n)")',
      'Offline Tx history — every Tx is mirrored into IndexedDB so you can audit activity even when you\'re offline',
    ],
    challenges: [
      'Provider fragmentation — normalised differences between injected wallets, WalletConnect, and hardware signing flows',
      'Network migrations — handled the sunset of Ropsten/Goerli by adding automatic chain-switch guards & Sepolia fall-back',
      'RPC rate limits — debounced gas-price polling and batched multicall reads to stay under Infura/Alchemy caps',
      'Smart-contract safety nets — Hardhat test-suite mocks re-entrancy, revert paths, and event-emission to prevent silent failures',
      'Secrets hygiene — Vite + dotenv-safe with pre-commit hooks to stop `.env` leaks in Git',
    ],
    tech: ['React (Vite)', 'Tailwind CSS', 'Ethers.js', 'Hardhat', 'Solidity', 'Node.js'],
  },
]; 