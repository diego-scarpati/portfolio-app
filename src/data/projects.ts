export interface Project {
  title: string;
  brief: string;
  technologies: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "Shine & Care Website",
    brief:
      "A landing page for an Australian cleaning company on the Northern Beaches area. Built with Next.js and Tailwind CSS, it features a modern, responsive design with smooth scrolling and clear calls to action.",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "V0"],
    url: "https://shineandcare.com.au/",
  },
  {
    title: "The Hire Me Project",
    brief:
      "A full-stack AI-powered job hunting platform. Backend automates listing ingestion, deduplication, AI scoring, and cover letter generation. Frontend provides advanced filtering, keyword highlighting, and job scoring insights.",
    technologies: [
      "TypeScript",
      "Node.js",
      "Next.js 15",
      "React 19",
      "Supabase",
      "OpenAI API",
      "Docker",
    ],
    url: "https://thmp-front.vercel.app/",
  },
  {
    title: "Crypto Prode",
    brief:
      "A blockchain-based prediction game built for the FIFA World Cup. Players enter predictions via a Solidity smart contract on EVM. Full DApp with React/Next.js frontend.",
    technologies: ["JavaScript", "React", "Next.js", "Solidity"],
    url: "https://github.com/diego-scarpati/crypto-prode",
  },
];
