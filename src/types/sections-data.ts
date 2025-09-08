import { LucideIcon } from "lucide-react";

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
  technologies: TechnologyName[];
};

export enum TechnologyName {
  javascript = 'JavaScript',
  typescript = 'TypeScript',
  git = 'Git',
  react = 'React',
  reactnative = 'React Native',
  nextjs = 'Next.js',
  figma = 'Figma',
  sql = 'SQL',
  postgresql = 'PostgreSQL',
  prisma = 'Prisma ORM',
  nodejs = 'Node.js',
  expressjs = 'Express.js',
  openai = 'OpenAI API',
  vscode = 'VS Code',
  githubcopilot = 'GitHub Copilot',
  v0 = 'V0.dev',
  agents = 'Agents',
  solidity = 'Solidity',
  ethereum = 'Ethereum',
  ethersjs = 'ethers.js',
  github = 'Github',
  mongodb = 'MongoDB',
  redux = 'Redux',
  graphql = 'GraphQL',
  jest = 'Jest',
  digitalocean = 'Digital Ocean',
  cypress = 'Cypress',
  socketio = 'Socket.IO',
  clerk = 'Clerk',
  tailwind = 'Tailwind CSS'
}
export enum TechnologyCategory {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Blockchain = 'Blockchain',
  AITools = 'AI tools'
}

export type ServiceData = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
};

export type TechnologyData = {
  icon: string;
  name: TechnologyName;
  href: string;
  categories: TechnologyCategory[];
};