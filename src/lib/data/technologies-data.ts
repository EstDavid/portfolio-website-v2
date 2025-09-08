import { TechnologyData, TechnologyName, TechnologyCategory } from "@/types/sections-data";

const imagesPath = '/images/technology-icons';

export const technologiesSectionText = {
  title: 'Tech Stack'
};

export const technologiesData: TechnologyData[] = [
  {
    icon: `${imagesPath}/typescript.svg`,
    name: TechnologyName.typescript,
    href: 'https://www.typescriptlang.org/',
    categories: [TechnologyCategory.Frontend, TechnologyCategory.Backend]
  },
  {
    icon: `${imagesPath}/nodejs.svg`,
    name: TechnologyName.nodejs,
    href: 'https://nodejs.org/',
    categories: [TechnologyCategory.Backend]
  },
  {
    icon: `${imagesPath}/javascript.svg`,
    name: TechnologyName.javascript,
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    categories: [TechnologyCategory.Frontend, TechnologyCategory.Backend]
  },
  {
    icon: `${imagesPath}/git.svg`,
    name: TechnologyName.git,
    href: 'https://git-scm.com/',
    categories: [TechnologyCategory.Frontend, TechnologyCategory.Backend, TechnologyCategory.Blockchain, TechnologyCategory.AITools]
  },
  {
    icon: `${imagesPath}/react.svg`,
    name: TechnologyName.react,
    href: 'https://react.dev/',
    categories: [TechnologyCategory.Frontend]
  },
  {
    icon: `${imagesPath}/figma.svg`,
    name: TechnologyName.figma,
    href: 'https://www.figma.com/',
    categories: [TechnologyCategory.Frontend]
  },
  {
    icon: `${imagesPath}/postgresql.svg`,
    name: TechnologyName.postgresql,
    href: 'https://www.postgresql.org/',
    categories: [TechnologyCategory.Backend]
  },
  {
    icon: `${imagesPath}/nextjs.svg`,
    name: TechnologyName.nextjs,
    href: 'https://nextjs.org/',
    categories: [TechnologyCategory.Frontend, TechnologyCategory.Backend]
  },
  {
    icon: `${imagesPath}/expressjs.svg`,
    name: TechnologyName.expressjs,
    href: 'https://expressjs.com/',
    categories: [TechnologyCategory.Backend]
  },
  {
    icon: `${imagesPath}/github.svg`,
    name: TechnologyName.github,
    href: 'https://github.com/',
    categories: [TechnologyCategory.Frontend, TechnologyCategory.Backend, TechnologyCategory.Blockchain, TechnologyCategory.AITools]
  },
  {
    icon: `${imagesPath}/openai.svg`,
    name: TechnologyName.openai,
    href: 'https://openai.com/',
    categories: [TechnologyCategory.AITools]
  },
  {
    icon: `${imagesPath}/githubcopilot.svg`,
    name: TechnologyName.githubcopilot,
    href: 'https://github.com/features/copilot',
    categories: [TechnologyCategory.AITools]
  },
  {
    icon: `${imagesPath}/vscode.svg`,
    name: TechnologyName.vscode,
    href: 'https://code.visualstudio.com/',
    categories: [TechnologyCategory.Frontend, TechnologyCategory.Backend, TechnologyCategory.Blockchain, TechnologyCategory.AITools]
  },
  {
    icon: `${imagesPath}/v0.svg`,
    name: TechnologyName.v0,
    href: 'https://v0.dev/',
    categories: [TechnologyCategory.AITools]
  },
  {
    icon: `${imagesPath}/mongodb.png`,
    name: TechnologyName.mongodb,
    href: 'https://www.mongodb.com/',
    categories: [TechnologyCategory.Backend]
  },
  {
    icon: `${imagesPath}/solidity.svg`,
    name: TechnologyName.solidity,
    href: 'https://soliditylang.org/',
    categories: [TechnologyCategory.Blockchain]
  },
  {
    icon: `${imagesPath}/ethereum.svg`,
    name: TechnologyName.ethereum,
    href: 'https://ethereum.org/',
    categories: [TechnologyCategory.Blockchain]
  },
  {
    icon: `${imagesPath}/redux.svg`,
    name: TechnologyName.redux,
    href: 'https://redux.js.org/',
    categories: [TechnologyCategory.Frontend]
  },
  {
    icon: `${imagesPath}/graphql.svg`,
    name: TechnologyName.graphql,
    href: 'https://graphql.org/',
    categories: [TechnologyCategory.Frontend, TechnologyCategory.Backend]
  },
  {
    icon: `${imagesPath}/jest.png`,
    name: TechnologyName.jest,
    href: 'https://jestjs.io/',
    categories: [TechnologyCategory.Frontend, TechnologyCategory.Backend]
  },
  {
    icon: `${imagesPath}/cypress.svg`,
    name: TechnologyName.cypress,
    href: 'https://www.cypress.io/',
    categories: [TechnologyCategory.Frontend]
  },
  {
    icon: `${imagesPath}/digitalocean.png`,
    name: TechnologyName.digitalocean,
    href: 'https://www.digitalocean.com/',
    categories: [TechnologyCategory.Backend]
  },
];