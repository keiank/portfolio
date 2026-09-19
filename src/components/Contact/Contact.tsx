import "./Contact.css";
import profile from "../../data/profile";
import MailIcon from "../../assets/MailIcon.png";
import LocationIcon from "../../assets/LocationIcon.png";
import ResumeIcon from "../../assets/ResumeIcon.png";

export function Contact() {
  return (
    <nav className="contact">
      <ul className="contact__list">
        <li className="contact__item">
          <img className="contact__icon" src={MailIcon} alt="Email Icon" />
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </li>
        <li className="contact__item">
          <img
            className="contact__icon"
            src={LocationIcon}
            alt="Location Icon"
          />{" "}
          <a
            className="contact__location"
            href={profile.locationUrl}
            target="_blank"
            rel="noreferrer"
          >
            {profile.locationText}
          </a>
        </li>
        <li className="contact__item contact__resume">
          <img className="contact__icon" src={ResumeIcon} alt="Resume Icon" />{" "}
          <a
            className="contact__resume-text"
            href={profile.resume}
            target="_blank"
            download
          >
            Download my resume (PDF)
          </a>
        </li>
      </ul>
      <ul className="contact__social-list">
        <li className="contact__social-item">
          <a
            className="contact__social-link"
            href={profile.githubUrl}
            target="_blank"
            aria-label="GitHub Profile Link"
          >
            <svg
              className="contact__social-icon"
              viewBox="0 0 52 52"
              width="52"
              height="52"
            >
              <circle
                className="contact__social-link-bg"
                cx="26"
                cy="26"
                r="26"
                fill="#ffffff00"
                stroke="#e6e6e6"
                stroke-width="1"
              />
              <g transform="translate(18.5, 18)">
                <path
                  cx="26"
                  cy="26"
                  d="M5.75014 15.5012V12.501C5.69763 12.0359 5.73514 11.5634 5.86264 11.1133C5.99015 10.6633 6.20766 10.2433 6.50018 9.87575C4.25005 9.87575 1.99993 8.37563 1.99993 5.75042C1.93878 4.81493 2.20384 3.88718 2.74997 3.12521C2.52496 2.26264 2.52496 1.36257 2.74997 0.5C2.74997 0.5 3.50001 0.5 5.00009 1.62509C6.9802 1.25006 9.02032 1.25006 11.0004 1.62509C12.5005 0.5 13.2506 0.5 13.2506 0.5C13.4606 1.36257 13.4606 2.26264 13.2506 3.12521C13.7981 3.89027 14.0606 4.81284 14.0006 5.75042C14.0006 8.37563 11.7505 9.87575 9.50034 9.87575C10.0853 10.6184 10.3547 11.5614 10.2504 12.501V15.5012M5.75014 12.501C2.36745 14.0011 2.00008 11.0008 0.5 11.0008"
                  fill="#ffffff00"
                  stroke="var(--color-text-primary)"
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </a>
        </li>
        <li className="contact__social-item">
          <a
            className="contact__social-link"
            href={profile.linkedinUrl}
            target="_blank"
            aria-label="LinkedIn Profile Link"
          >
            <svg
              className="contact__social-icon"
              viewBox="0 0 52 52"
              width="52"
              height="52"
            >
              <circle
                className="contact__social-link-bg"
                cx="26"
                cy="26"
                r="26"
                fill="#ffffff00"
                stroke="#e6e6e6"
                stroke-width="1"
              />
              <g transform="translate(18, 18)">
                <path
                  d="M14.1831 6.31826C13.3391 5.47432 12.1944 5.00019 11.0008 5.00019C9.80727 5.00019 8.66259 5.47432 7.8186 6.31826C6.97462 7.16221 6.50048 8.30685 6.50048 9.50038V14.7506H9.50072V9.50038C9.50072 9.10254 9.65877 8.72099 9.94009 8.43967C10.2214 8.15836 10.603 8.00032 11.0008 8.00032C11.3987 8.00032 11.7803 8.15836 12.0616 8.43967C12.3429 8.72099 12.501 9.10254 12.501 9.50038V14.7506H15.5012V9.50038C15.5012 8.30685 15.0271 7.16221 14.1831 6.31826Z"
                  fill="#ffffff00"
                  stroke="var(--color-text-primary)"
                  stroke-linecap="round"
                />
                <path
                  d="M3.50024 5.75022H0.5V14.7506H3.50024V5.75022Z"
                  fill="#ffffff00"
                  stroke="var(--color-text-primary)"
                  stroke-linecap="round"
                />
                <path
                  d="M2.00012 3.50013C2.82861 3.50013 3.50024 2.82853 3.50024 2.00006C3.50024 1.1716 2.82861 0.5 2.00012 0.5C1.17163 0.5 0.5 1.1716 0.5 2.00006C0.5 2.82853 1.17163 3.50013 2.00012 3.50013Z"
                  fill="#ffffff00"
                  stroke="var(--color-text-primary)"
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </a>
        </li>
        <li className="contact__social-item">
          <a href={profile.xUrl} target="_blank" aria-label="X Profile Link">
            <svg
              className="contact__social-icon"
              viewBox="0 0 52 52"
              width="52"
              height="52"
            >
              <circle
                className="contact__social-link-bg"
                cx="26"
                cy="26"
                r="26"
                fill="#ffffff00"
                stroke="#e6e6e6"
                stroke-width="1"
              />
              <svg x="18" width="15" viewBox="0 0 1200 1227">
                <path
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                  fill="var(--color-text-primary)"
                />
              </svg>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
