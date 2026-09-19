import projects from "../../data/projects";
import "./Projects.css";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { useState } from "react";

export function Projects() {
  const [numberShown, setNumberShown] = useState(Math.min(projects.length, 3));

  function showMore() {
    setNumberShown(numberShown + 3);
  }

  return (
    <section id="projects" className="projects">
      <h1 className="projects__title">Projects</h1>
      <ul className="projects__list">
        {projects.slice(0, numberShown).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
      {projects.length > 3 && numberShown < projects.length ? (
        <div className="projects__button-area">
          <button
            onClick={() => showMore()}
            className="projects__show-more-btn"
            type="button"
          >
            Show more
          </button>
        </div>
      ) : null}
    </section>
  );
}
