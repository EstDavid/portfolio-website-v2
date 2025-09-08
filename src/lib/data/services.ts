import { ServiceData } from "@/types/sections-data";
import { Atom, Link, Rocket, Settings, Sparkles, Wrench } from "lucide-react";

export const servicesSectionText = {
  title: "Let's build together",
  tagline: "As a developer, I wear many hats, from crafting friendly and attractive user interfaces to building robust backend systems. My diverse skill set allows me to tackle projects from multiple angles."
};

export const servicesData: ServiceData[] = [
  {
    icon: Rocket,
    title: "Full-Stack Developer",
    tagline: "Complete Web Application Development",
    description: `Leverage my comprehensive skills in React, Next.js, and Node.js to build end-to-end web applications. I combine strong frontend expertise with solid backend knowledge to deliver scalable, modern solutions. My background in mechanical engineering brings a unique systems thinking approach to architecting robust applications.`
  },
  {
    icon: Atom,
    title: "Frontend React Developer",
    tagline: "Modern User Interface Specialist",
    description: `Specialize in creating responsive, performant user interfaces using React and Next.js. Expert in modern CSS frameworks like Tailwind CSS and state management with Redux. I focus on delivering exceptional user experiences with clean, maintainable code and attention to detail.`
  },
  {
    icon: Sparkles,
    title: "AI Tools Explorer & Integration Specialist",
    tagline: "Next-Generation Development Acceleration",
    description: `These are exciting times where software development can be dramatically accelerated with the expanding ecosystem of AI tools. I strive to strategically select and master the right AI tools for specific development challenges, maintaining an open mind toward emerging opportunities while carefully evaluating potential risks. My focus extends beyond just using AI tools to thoughtfully integrating them into seamless user experiences.`
  },
  {
    icon: Wrench,
    title: "Backend Node.js Developer",
    tagline: "Server-Side Architecture & APIs",
    description: `Build robust server-side applications and RESTful APIs using Node.js and Express.js. Experience with database design using MongoDB and implementing GraphQL endpoints. My engineering background ensures I approach backend systems with scalability and reliability in mind.`
  },
  {
    icon: Link,
    title: "Web3 & Blockchain Developer",
    tagline: "Decentralized Application Development",
    description: `Apply my Web3 knowledge to create blockchain-integrated applications and smart contract interfaces. While I maintain a measured approach to blockchain investments, I bring technical expertise in building decentralized applications and connecting traditional web apps with blockchain networks.`
  },
  {
    icon: Settings,
    title: "Systems Integration Developer",
    tagline: "Engineering-Driven Software Solutions",
    description: `Utilize my mechanical engineering background to approach software development with systems thinking. Specialize in integrating complex software systems, optimizing performance, and building applications that require deep technical understanding and systematic problem-solving approaches.`
  }
];