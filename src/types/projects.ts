export type ProjectData = {
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  imageSrc: string;
  imageRounded?: boolean;
  landscape?: boolean;
  liveProjectUrl?: string;
  githubProjectUrl?: string;
  technologies: Technologies[];
};

export enum Technologies {
  javascript = 'JavaScript',
  typescript = 'TypeScript',
  git = 'Git',
  react = 'React',
  reactnative = 'React Native',
  nextjs = 'Next.js',
  figma = 'Figma',
  postgresql = 'PostgreSQL',
  nodejs = 'Node.js',
  expressjs = 'Express.js',
  openai = 'OpenAI API',
  vscode = 'VS Code',
  githubcopilot = 'GitHub Copilot',
  v0 = 'V0.dev',
  agents = 'Agents',
  solidity = 'Solidity',
  ethersjs = 'ethers.js',
  github = 'Github',
  mongodb = 'MongoDB',
  redux = 'Redux',
  graphql = 'GraphQL',
  jest = 'Jest',
  digitalocean = 'Digital Ocean',
  cypress = 'Cypress'
}