import type { SkillGroup } from "../types";

const Languages: SkillGroup = {
  category: "Languages",
  items: ["JavaScript", "HTML", "CSS", "TypeScript", "C", "C++"],
};

const Frontend: SkillGroup = {
  category: "Frontend",
  items: ["React", "Vite", "Responsive Design", "Accessibility"],
};

const Backend: SkillGroup = {
  category: "Backend",
  items: ["Node.js", "Express", "MongoDB", "REST API"],
};

const Tools: SkillGroup = {
  category: "Tools",
  items: [
    "Git",
    "Docker",
    "GitHub Actions",
    "Figma",
    "AWS",
    "AWS EC2",
    "Vercel",
    "Nebius Token Factory",
    "OpenAI API",
    "RAG",
    "GIMP",
  ],
};

export const skills: SkillGroup[] = [Languages, Frontend, Backend, Tools];
