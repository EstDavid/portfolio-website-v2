import { ProjectData, TechnologyName } from "@/types/sections-data";

export const projectsSectionText = {
  title: 'Projects',
  tagline: 'Explore my latest work',
  backToHomepage: 'Back to homepage',
  previousProject: 'Previous project',
  nextProject: 'Next project'
};

const pathImages = '/images/projects';

export const projects: ProjectData[] = [
  {
    title: 'Pop In Home',
    tagline: 'PopInHome - Clear property insights for home buyers',
    shortDescription: `PopInHome gathers listing facts, renovation ideas, and price projections in a single dashboard for web and mobile. I was in charge of building the admin panel from scratch with *Next.js*, expanded the *Node.js* API with full CRUD endpoints, and connected *Stripe* for subscription billing. I also added AI chat dialogs in the admin to speed up property-data enrichment.`,
    fullDescription: `PopInHome is a real-estate web and mobile app that gives buyers and investors clear, data-backed reports on each listing's current state, renovation potential, and likely future value.
    
  By putting property intelligence reports, renovation analysis, and price projections in one place, the platform saves users the legwork that once required multiple tools or consultants. The result is a faster, more confident home-buying process for both individual buyers and professional investors.

  **My contributions**
  - Built the **admin panel from scratch with Next.js** and added full CRUD API endpoints in the Node.js backend
  - **Integrated Stripe** for subscription billing
  - **Added AI chat dialogs** in the admin to speed up property-data enrichment
  - Wrote the **backend test suite** to guard core endpoints
  - Created Zod-validated forms for each property report (architecture, interior design, rental, financial, legal, engineering)

  Available on [iOS App Store](https://apps.apple.com/gb/app/pop-in-home/id6476573924 "Pop In Home in iOs")
    `,
    images: [
      `${pathImages}/popinhome_003.png`,
      `${pathImages}/popinhome_009.png`,
      `${pathImages}/popinhome_005.png`,
      `${pathImages}/popinhome_010.png`,
      `${pathImages}/popinhome_004.png`,
    ],
    imageRounded: true,
    liveProjectUrl: 'https://www.popinhome.com',
    technologies: [
      TechnologyName.typescript,
      TechnologyName.react,
      TechnologyName.git,
      TechnologyName.github,
      TechnologyName.githubcopilot,
      TechnologyName.nextjs,
      TechnologyName.tailwind,
      TechnologyName.sql,
      TechnologyName.expressjs,
      TechnologyName.postgresql,
      TechnologyName.figma,
      TechnologyName.openai,
      TechnologyName.agents,
      TechnologyName.digitalocean,
    ]
  },
  {
    title: 'MBVC Payments Management System',
    tagline: `Payment System Intregrating Spain's Redsys Bizum Gateway`,
    shortDescription: `Comprehensive payment management web application for a beach volleyball club. The system streamlines direct mobile payments for a multi-level beach volleyball training program serving both adults and children across different skill levels.`,
    fullDescription: `I built a Full-stack web application with a payment management system for Montgó Beach Volley Club in Jávea, Spain, where I serve as president. The system streamlines direct mobile payments for a multi-level beach volleyball training program serving both adults and children across different skill levels.

  **Key Achievements:**
  - Built responsive, **mobile-first interface** using React/Next.js and Tailwind CSS
  - Implemented **secure payment gateway** integration with **Redsys** for Spanish market compliance
  - Developed real-time payment status tracking and member management system
  - Architected full backend with Next.js API routes, Prisma ORM, and PostgreSQL database
  - Reduced payment processing time and **eliminated manual payment tracking**
    `,
    images: [
      `${pathImages}/mbvc-payments_004.jpg`,
      `${pathImages}/mbvc-payments_010.png`,
      `${pathImages}/mbvc-payments_005.jpg`,
      `${pathImages}/mbvc-payments_006.jpg`,
      `${pathImages}/mbvc-payments_009.png`,
    ],
    imageRounded: true,
    liveProjectUrl: 'https://payments.montgobvc.com',
    githubProjectUrl: 'https://github.com/estdavid/mbvc-payments',
    landscape: true,
    technologies: [
      TechnologyName.typescript,
      TechnologyName.react,
      TechnologyName.git,
      TechnologyName.github,
      TechnologyName.githubcopilot,
      TechnologyName.nextjs,
      TechnologyName.tailwind,
      TechnologyName.sql,
      TechnologyName.postgresql,
      TechnologyName.prisma,
      TechnologyName.v0,
    ]
  },
  {
    title: 'CADO',
    tagline: `Web App For Pet Owners And Pet Sitters Marketplace`,
    shortDescription: `A full-stack web application connecting pet owners with trusted local pet sitters through real-time communication and location-based matching.`,
    fullDescription: `CADO addresses the common challenge pet owners face when traveling - finding reliable, nearby pet care. The platform enables pet owners to discover local sitters using geolocation search, communicate through real-time chat, and receive photo/video updates during pet stays.

  **Key Features & Technical Achievements:**
  - **Geolocation-Based Search:** Implemented MongoDB GeoJSON objects with Geocoding API for location-aware sitter discovery
  - **Real-Time Communication:** Built WebSocket-powered chat system using Socket.io for instant owner-sitter messaging
  - **Media Timeline:** Developed photo/video update system with Cloudinary integration for seamless pet stay documentation
  - **Comprehensive User Profiles:** Created detailed pet and sitter profile management with role-based authentication

  **My Technical Contributions:**
  - **Database Architecture:** Collaborated on designing and implementing the complete MongoDB data model with Mongoose ORM
  - **Component Development:** Built multiple reusable React components using Next.js App Router and TypeScript
  - **UI/UX Implementation:** Centralized styling system with Tailwind CSS and shadcn/ui components for consistent design
  - **Team Leadership:** Provided technical mentorship and debugging support to resolve complex development challenges
    `,
    images: [
      `${pathImages}/cado_004.jpg`,
      `${pathImages}/cado_005.png`,
      `${pathImages}/cado_006.png`,
      `${pathImages}/cado_007.png`,
      `${pathImages}/cado_008.png`,
    ],
    imageRounded: true,
    githubProjectUrl: 'https://github.com/EstDavid/pet-care-app',
    landscape: true,
    technologies: [
      TechnologyName.typescript,
      TechnologyName.react,
      TechnologyName.git,
      TechnologyName.github,
      TechnologyName.githubcopilot,
      TechnologyName.nextjs,
      TechnologyName.tailwind,
      TechnologyName.mongodb,
      TechnologyName.socketio,
      TechnologyName.clerk,
      TechnologyName.figma,
    ]
  },
  {
    title: 'Pura Vida',
    tagline: `Mobile Event Management Platform for Spiritual Festival Experience`,
    shortDescription: `A React Native mobile companion designed for a spiritual summer festival near Berlin, featuring offline-first architecture for activity planning, healer discovery, and venue navigation without internet dependency.`,
    fullDescription: `A React Native mobile application designed for Berlin's Pura Vida Summer Festival, providing attendees with a comprehensive digital companion for navigating the transformative festival experience. The app enables users to discover, plan, and organize their spiritual journey through the festival's diverse offerings.

  **Key Features:**
  - **Activity Planning & Scheduling:** Browse and curate a personalized festival itinerary from workshops, ceremonies, and healing sessions
  - **Interactive Area Navigation:** Navigate between different festival zones and locate specific venues with ease
  - **Healer Directory:** Discover and connect with spiritual practitioners, healers, and workshop facilitators
  - **Offline-First Architecture:** All data stored locally using AsyncStorage, ensuring full functionality without internet connectivity
  - **Intuitive User Experience:** Clean, modern interface built with React Native Paper following Material Design principles

  **Technical Highlights:**
  - **Cross-Platform:** Built with Expo and React Native for iOS, Android, and web deployment
  - **Robust Form Handling:** Formik and Yup integration for seamless user input and validation
  - **Testing Suite:** Comprehensive testing setup with Jest and React Testing Library
  - **Modern Development:** ESLint configuration, component-based architecture, and SVG support
  - **Performance Optimized:** Efficient local data management for smooth offline experience
  
  Perfect for festival-goers seeking a digital tool to enhance their spiritual journey while maintaining connection even in areas with limited network coverage.
      `,
    images: [
      `${pathImages}/puravida_001.jpg`,
      `${pathImages}/puravida_002.jpg`,
      `${pathImages}/puravida_003.jpg`,
    ],
    imageRounded: true,
    githubProjectUrl: 'https://github.com/EstDavid/pura-vida-app',
    technologies: [
      TechnologyName.javascript,
      TechnologyName.reactnative,
      TechnologyName.github,
      TechnologyName.figma,
    ]
  },
  {
    title: 'UniCharts',
    tagline: `Uniswap V3 Price Analytics Platform`,
    shortDescription: `Full-stack Web3 application for real-time cryptocurrency price analysis, directly integrating with Uniswap V3 decentralized exchange pools to provide institutional-grade charting capabilities.`,
    fullDescription: `Full-stack Web3 application for real-time cryptocurrency price analysis, directly integrating with Uniswap V3 decentralized exchange pools to provide institutional-grade charting capabilities.

  **Technical Architecture**
  
  Built a React/Redux frontend with Express.js backend, leveraging Google Cloud Storage for scalable data persistence. The system processes raw blockchain data through a custom data pipeline, transforming timestamp-based price observations into professional candlestick charts using react-apexcharts.

  **Key Features:**
  - Real-time candlestick charts with OHLC (Open, High, Low, Close) data visualization
  - Multi-timeframe analysis from 30-second intervals to hourly charts
  - Advanced technical indicators supporting up to 5 simultaneous moving averages (SMA/EMA)
  - Interactive chart controls with custom scroll and zoom functionality
  - Dynamic token pair discovery with automated symbol list generation from pool data
  - Web3 Integration & Data Processing

  Engineered a sophisticated data processing pipeline that connects to a separate Uniswap V3 Oracle Reader system, handling complex token metadata, pool addresses, and fee structures. Custom price calculation algorithms ensure accurate base/quote token ratios while managing blockchain-specific data formatting challenges.

  **Technical Highlights:**
  - Redux state management with custom slices for price data and symbol lists
  - Google Cloud Storage API integration for efficient data retrieval
  - Custom mathematical functions for SMA/EMA indicator calculations
  - Responsive design with SCSS styling and interactive UX patterns

  This project showcases my understanding of DeFi protocols, complex data pipeline architecture, and the ability to build production-ready financial tools - valuable skills for Web3 startups and fintech companies
      `,
    images: [
      `${pathImages}/unicharts_001.png`,
    ],
    githubProjectUrl: 'https://github.com/EstDavid/uniswapv3-charts',
    landscape: true,
    technologies: [
      TechnologyName.typescript,
      TechnologyName.solidity,
      TechnologyName.ethersjs,
      TechnologyName.react,
      TechnologyName.github,
      TechnologyName.expressjs,
      TechnologyName.mongodb,
    ]
  },
  {
    title: 'Delta Radar',
    tagline: `DeFi Arbitrage Trading Platform`,
    shortDescription: `Arbitrage trading system deployed on Ethereum Mainnet and Binance Smart Chain, featuring advanced flash loan integration and cross-DEX price discovery algorithms. Built comprehensive frontend analytics dashboard to visualize and analyze trading bot performance across multiple blockchain networks.`,
    fullDescription: `Arbitrage trading system deployed on Ethereum Mainnet and Binance Smart Chain, featuring advanced flash loan integration and cross-DEX price discovery algorithms. Built comprehensive frontend analytics dashboard to visualize and analyze trading bot performance across multiple blockchain networks.
  
  **System Architecture**

  Engineered a multi-component DeFi trading ecosystem consisting of:
  - Smart contract infrastructure with flash loan capabilities for capital-efficient arbitrage
  - Cross-chain scanning engine monitoring token pools across multiple DEXs
  - Mathematical optimization algorithms using x·y=k AMM formulas for precise slippage calculations
  - React/Redux frontend with Express.js backend leveraging Google Cloud Storage

  **Advanced DeFi Mechanics**
  - Real-time arbitrage detection across decentralized exchanges with millisecond precision
  - Optimal trade sizing calculations maximizing profit while accounting for liquidity constraints
  - Native token conversion algorithms enabling cross-asset profitability comparisons (ETH, BNB)
  - Slippage-aware pricing models providing realistic profit projections

  Production Insights & MEV Experience
  Gained hands-on experience with DeFi market microstructure through live mainnet deployment, documenting the challenges of MEV competition and gas optimization. Analysis revealed the critical importance of mempool positioning and transaction timing in profitable arbitrage execution.

  **Technical Features**
  - Historical trade analysis with advanced filtering by profitability, tokens, exchanges, and timeframes
  - Delta calculation engine providing both absolute and percentage-based profit metrics

  SwapSet data modeling for comprehensive arbitrage opportunity tracking

  Real-World DeFi Learnings
  Documented the economic realities of DeFi arbitrage, including transaction reversion rates, gas fee optimization, and competitive dynamics in high-frequency trading environments. Project showcases deep understanding of blockchain economics and DeFi protocol interactions  
      `,
    images: [
      `${pathImages}/deltaradar_001.png`,
    ],
    githubProjectUrl: 'https://github.com/EstDavid/delta-radar',
    landscape: true,
    technologies: [
      TechnologyName.javascript,
      TechnologyName.solidity,
      TechnologyName.ethersjs,
      TechnologyName.react,
      TechnologyName.github,
      TechnologyName.expressjs,
      TechnologyName.mongodb,
    ]
  }
];