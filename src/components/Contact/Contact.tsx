import "./Contact.css";
import profile from "../../data/profile";
import MailIcon from "../../assets/MailIcon.png";
import LocationIcon from "../../assets/LocationIcon.png";
import ResumeIcon from "../../assets/ResumeIcon.png";
import GitHubIcon from "../../assets/social-icon-github.png";
import LinkedinIcon from "../../assets/social-icon-linkedin.png";
import XIcon from "../../assets/social-icon-x.png";

export function Contact() {
  return (
    <nav className="contact">
      <ul className="contact__list">
        <li className="contact__item contact__email">
          <img className="contact__icon" src={MailIcon} alt="Email Icon" />
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li className="contact__item contact__location">
          <img
            className="contact__icon"
            src={LocationIcon}
            alt="Location Icon"
          />{" "}
          <a href={profile.locationUrl} target="_blank" rel="noreferrer">
            {profile.locationText}
          </a>
        </li>
        <li className="contact__item contact__resume">
          <img className="contact__icon" src={ResumeIcon} alt="Resume Icon" />{" "}
          <a href={profile.resume} target="_blank" download>
            Download my resume (PDF)
          </a>
        </li>
      </ul>
      <ul className="contact__social-list">
        <li className="contact__social-item">
          <a href={profile.githubUrl} target="_blank" aria-label="GitHub Profile Link">
            <img className="contact__social-icon" src={GitHubIcon} alt="GitHub Icon" />
          </a>
        </li>
        <li className="contact__social-item">
          <a href={profile.linkedinUrl} target="_blank" aria-label="LinkedIn Profile Link">
            <img className="contact__social-icon" src={LinkedinIcon} alt="Linkedin Icon" />
          </a>
        </li>
        <li className="contact__social-item">
          <a href={profile.xUrl} target="_blank" aria-label="X Profile Link">
            <img className="contact__social-icon" src={XIcon} alt="X Icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
