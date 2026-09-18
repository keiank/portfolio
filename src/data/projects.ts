import type { Project } from "../types";
import meshAIImg from "../assets/projects/mesh_ai.png";
import flashcardAppImg from "../assets/projects/flashcards_app.png";
import workspaceHubImg from "../assets/projects/workspacehub.png";

const projects: Project[] = [
  {
    id: "0",
    name: "Mesh AI",
    description: [
      "Ask your documents questions after uploading them to an LLM you own. Built using a RAG pipeline. Deployed to AWS with Docker.",
    ],
    image: meshAIImg,
    githubUrl: "https://github.com/keiank/ai-se_project_mesh-ai",
    liveUrl: "https://meshai.happyrobotics.com/",
  },
  {
    id: "1",
    name: "Flash Cards",
    description: [
      "A flashcard web application that allows TripleTen students to review course content. Built with JavaScript, HTML, and CSS.",
    ],
    image: flashcardAppImg,
    githubUrl: "https://github.com/keiank/ai-se_project_flashcards",
    liveUrl: "https://keiank.github.io/ai-se_project_flashcards/",
  },
  {
    id: "2",
    name: "WorkspaceHub",
    description: [
      "Full-stack MERN application built with Typescript. I added the following features using an AI-assisted workflow: task count on projects, commenting on tasks, dashboard view of team members, booking form validation, conditional rendering based on user role.",
    ],
    image: workspaceHubImg,
    githubUrl: "https://github.com/keiank/ai-se_project_workspacehub",
    liveUrl: "https://ai-se-project-workspacehub-client-wine.vercel.app/",
  },
];

export default projects;
