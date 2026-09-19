import "./Skills.css";
import { skills } from "../../data/skills";

export function Skills() {
  return (
    <section id="skills" className="skills">
      <h1 className="skills__title">Skills</h1>
      <ul className="skills__list skills__groups">
        {skills.map((skillGroup) => (
          <li key={skillGroup.category}>
            <h3 className="skills__category">
              {skillGroup.category}
            </h3>
            <ul className="skills__list skills__items">
              {skillGroup.items.map((item) => (
                <li key={item} className="skills__item">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
