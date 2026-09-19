import projects from "../../data/projects";
import "./Projects.css";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export function Projects() {
    return (
        <section id="projects" className="projects">
            <h1 className="projects__title">Projects</h1>
            <ul className="projects__list">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </ul>
        </section>
    );
}