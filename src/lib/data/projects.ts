import { ProjectData, Technologies } from "@/types/projects";

export const projects: ProjectData[] = [
  {
    title: 'Pop In Home',
    tagline: 'Real Estate Intelligence & Property Analysis App',
    shortDescription: `PopInHome is a comprehensive real estate application that empowers property buyers and investors with data-driven insights for informed decision-making. The app delivers detailed property reports that provide in-depth analysis of each listing's current condition, renovation potential, and projected future value.`,
    fullDescription: `PopInHome is a comprehensive real estate application that empowers property buyers and investors with data-driven insights for informed decision-making. The app delivers detailed property reports that provide in-depth analysis of each listing's current condition, renovation potential, and projected future value.
  - **Property Intelligence Reports** - Comprehensive assessments of property conditions and investment potential
  - **Renovation Analysis** - Insights into possible improvements and their impact on property value
  - **Future Value Projections** - Data-driven forecasts to support investment decisions
  - **Full Data Transparency** - Access to crucial property information before purchase
  The platform enhances the home-buying experience by providing buyers with critical property data that traditionally required extensive research or professional consultation. PopInHome serves both individual homebuyers and real estate investors seeking to make confident, well-informed property decisions in today's competitive market.

  Available on [iOS App Store](https://apps.apple.com/gb/app/pop-in-home/id6476573924 "Pop In Home in iOs") and as [Web App](https://www.popinhome.com "Pop In Home App")
    `,
    imageSrc: '/images/projects/popinhome_002.png',
    imageRounded: true,
    liveProjectUrl: 'https://www.popinhome.com',
    technologies: [
      Technologies.typescript,
      Technologies.react,
      Technologies.git,
      Technologies.github,
      Technologies.githubcopilot,
      Technologies.nextjs,
      Technologies.expressjs,
      Technologies.postgresql,
      Technologies.figma,
      Technologies.openai,
      Technologies.agents,
      Technologies.digitalocean,
    ]
  },
  {
    title: 'MBVC Payments Management System',
    tagline: `Payment System Intregrating Spain's Redsys Bizum Gateway`,
    shortDescription: `Full-stack web application to address a beach volley club's payment processing`,
    fullDescription: `I developed a comprehensive payment management web application for Montgó Beach Volley Club in Jávea, Spain, where I serve as president. The system streamlines financial operations for a multi-level beach volleyball training program serving both adults and children across different skill levels.
  I built a full-stack web application to address the club's payment processing.

  Frontend Technologies:
  - React/Next.js for responsive user interface
  - Tailwind for mobile-first design
  - Real-time payment status updates
  

  Backend Architecture:
  - Next.js API routes
  - Prisma as ORM connecting to a PostgreSQL database for member and transaction management
  - Integration with Redsys Secure payment gateway

  [See project live](https://payments.montgobvc.com "Montgó Beach Volley Club Bizum Payments Gateway")

  [See MBVC Payments on github](https://github.com/estdavid/mbvc-payments "MBVC Payments Project on Github")
    `,
    imageSrc: '/images/projects/mbvc-payments_002.png',
    imageRounded: true,
    liveProjectUrl: 'https://payments.montgobvc.com',
    githubProjectUrl: 'https://github.com/estdavid/mbvc-payments',
    landscape: true,
    technologies: [
      Technologies.typescript,
      Technologies.react,
      Technologies.git,
      Technologies.github,
      Technologies.githubcopilot,
      Technologies.nextjs,
      Technologies.postgresql,
      Technologies.v0,
    ]
  },
  {
    title: 'CADO',
    tagline: `Web App For Pet Owners And Pet Sitters Marketplace`,
    shortDescription: `Mobile web application helping pet owners to find pet sitters, and pet sitters to manage pet stays and send media updates`,
    fullDescription: `CADO is a Mobile web application helping pet owners to find pet sitters, and pet sitters to manage pet stays and send media updates
  - Collaborated in the creation of the database model and implemented several client and server components
  - Centralized styling and colors of the app using Tailwind CSS
  - Gave technical assistance to other developers in solving roadblocks

  [See CADO on github](https://github.com/EstDavid/pet-care-app "CADO Project on Github")
    `,
    imageSrc: '/images/projects/cado_004.jpeg',
    imageRounded: true,
    githubProjectUrl: 'https://github.com/EstDavid/pet-care-app',
    landscape: true,
    technologies: [
      Technologies.typescript,
      Technologies.react,
      Technologies.git,
      Technologies.github,
      Technologies.githubcopilot,
      Technologies.nextjs,
      Technologies.mongodb,
      Technologies.figma,
    ]
  },
  {
    title: 'Pura Vida',
    tagline: `React Native App for planning your activities in a Spiritual Festival`,
    shortDescription: `There can be lots of very enriching and transforming activities and events to attend at a Spiritual Festival
  This App allows you to choose an plan your activities, get around the different areas, find the healers you will visit.
  It stores the information in the phone's local storage so you don't have to worry about poor internet connections`,
    fullDescription: `There can be lots of very enriching and transforming activities and events to attend at a Spiritual Festival
  This App allows you to choose an plan your activities, get around the different areas, find the healers you will visit.
  It stores the information in the phone's local storage so you don't have to worry about poor internet connections

  [See Pura Vida on github](https://github.com/EstDavid/pura-vida-app "Pura Vida Project on Github")
    `,
    imageSrc: '/images/projects/puravida_001.jpeg',
    imageRounded: true,
    githubProjectUrl: 'https://github.com/EstDavid/pura-vida-app',
    technologies: [
      Technologies.javascript,
      Technologies.reactnative,
      Technologies.github,
      Technologies.figma,
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
  
  [See UniCharts on github](https://github.com/EstDavid/uniswapv3-charts "UniCharts Project on Github")
    `,
    imageSrc: '/images/projects/unicharts_001.png',
    githubProjectUrl: 'https://github.com/EstDavid/uniswapv3-charts',
    landscape: true,
    technologies: [
      Technologies.typescript,
      Technologies.solidity,
      Technologies.ethersjs,
      Technologies.react,
      Technologies.github,
      Technologies.expressjs,
      Technologies.mongodb,
    ]
  },
  {
    title: 'Delta Radar',
    tagline: `DeFi Arbitrage Trading Platform`,
    shortDescription: `Full-stack Web3 application for real-time cryptocurrency price analysis, directly integrating with Uniswap V3 decentralized exchange pools to provide institutional-grade charting capabilities.`,
    fullDescription: `Production-grade arbitrage trading system deployed on Ethereum Mainnet and Binance Smart Chain, featuring advanced flash loan integration and cross-DEX price discovery algorithms. Built comprehensive frontend analytics dashboard to visualize and analyze trading bot performance across multiple blockchain networks.
  
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
  
  [See Delta Radar on github](https://github.com/EstDavid/delta-radar "Delta Radar Project on Github")
    `,
    imageSrc: '/images/projects/deltaradar_001.png',
    githubProjectUrl: 'https://github.com/EstDavid/delta-radar',
    landscape: true,
    technologies: [
      Technologies.javascript,
      Technologies.solidity,
      Technologies.ethersjs,
      Technologies.react,
      Technologies.github,
      Technologies.expressjs,
      Technologies.mongodb,
    ]
  }
];