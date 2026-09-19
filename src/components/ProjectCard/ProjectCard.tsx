import type { Project } from "../../types";
import "./ProjectCard.css";
import GitHubIcon from "../../assets/GitHubIcon.png";
import ExternalLinkIcon from "../../assets/ExternalLinkIcon.png";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="project-card">
      <div className="project-card__image-area">
        <img
          className="project-card__image"
          src={project.image}
          alt={`Screenshot of ${project.name}`}
        />
      </div>
      <div className="project-card__content">
        <div className="project-card__text">
          <h1 className="project-card__title">{project.name}</h1>
          {project.description.map((paragraph) => (
            <p className="project-card__description">{paragraph}</p>
          ))}
        </div>
        <div className="project-card__links">
          <a
            href={project.githubUrl}
            target="_blank"
            className="project-card__link"
          >
            <img
              className="project-card__icon"
              src={GitHubIcon}
              alt="GitHub Icon"
            />
            Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            className="project-card__link"
          >
            <img
              className="project-card__icon"
              src={ExternalLinkIcon}
              alt="External Link Icon"
            />
            Live
          </a>
        </div>
      </div>
    </li>
  );
}
