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
    name: 'PATIO AI',
    image: 'patioai1.png',
    github: 'https://github.com/AKIFQ/patioai',
    live: 'https://www.patioai.chat',
    description: 'LIVE NOW • True multi-user AI chat platform with complete conversational context sharing across group conversations. Experience real-time collaboration with multiple AI models simultaneously while maintaining full conversation history and context for all participants.',
    features: [
      'True multi-user AI conversations with complete shared conversational context in group chats',
      'Heuristic model routing engine that auto-selects optimal AI models with cost-aware fallbacks',
      'Memory-leak-resistant WebSocket system with adaptive health monitoring for production scale',
      'Tier-based quota system with token limits (8K-128K) and context windows (32K-2M)',
      'Production-grade Stripe integration with webhook event handling and subscription management',
    ],
    challenges: [
      'Architected memory-leak-resistant WebSocket system with adaptive health monitoring and connection deduplication',
      'Built heuristic model routing engine analyzing message content to auto-select optimal AI models',
      'Implemented tier-based quota system enforcing token limits via PostgreSQL RPC functions',
      'Integrated OpenRouter with provider-specific reasoning modes and streaming AI responses',
      'Designed real-time collaborative AI interactions maintaining conversation state across users',
    ],
    tech: ['TypeScript', 'Next.js 15', 'Socket.IO', 'PostgreSQL', 'OpenRouter', 'AI SDK', 'Stripe', 'Tailwind CSS'],
  },
  {
    name: 'SAV',
    image: 'sav.gif',
    github: 'https://github.com/AKIFQ/sav',
    live: 'https://github.com/AKIFQ/sav',
    description: 'Shadow VCS for AI Agents • A local-first staging version-control system that quarantines AI-generated code, assigns automatic risk scores, and applies YAML-based policy gates before changes reach Git.',
    features: [
      'Quarantines AI-generated code in .sav/commits/* with automatic risk scoring',
      'AST-guarded policy engine that auto-approves docs & small patches yet blocks sensitive patterns',
      'YAML-based policy gates for systematic code review and approval workflows',
      'Reduces human review load by ~60% in multi-agent workflows through intelligent filtering',
      'Pip-installable in 3s with GitHub Actions CI and pre-push hook integration',
    ],
    challenges: [
      'Designed AST-guarded policy engine for intelligent code pattern recognition and risk assessment',
      'Built local-first staging system with version control integration for AI-generated content',
      'Implemented YAML-based policy framework for systematic code review automation',
      'Created packaging and distribution system for rapid deployment across development teams',
      'Architected multi-agent workflow support with intelligent review load optimization',
    ],
    tech: ['Python', 'AST', 'YAML', 'Git', 'GitHub Actions', 'CI/CD', 'Version Control'],
  },
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