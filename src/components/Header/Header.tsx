import "./Header.css";
import profile from "../../data/profile";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header">
        <a className="header__brand" href="#home">
          {profile.name}
        </a>
        <nav className="header__nav">
          <a href="#home" className="header__link">
            Home
          </a>
          <a href="#skills" className="header__link">
            Skills
          </a>
          <a href="#projects" className="header__link">
            Projects
          </a>
          <a href="#contact" className="header__link">
            Contact
          </a>
        </nav>
        <button
          aria-expanded={isOpen}
          aria-controls="header__nav"
          aria-label="Toggle navigation menu"
          onClick={() => setTimeout(() => setIsOpen(!isOpen), 100)}
          className="header__hamburger-button"
          type="button"
        >
          {!isOpen
          ? <svg className="header__mobile-menu" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.00073 4.99915H19.9991M4.00073 11.9999H19.9991M4.00073 19.0007H19.9991" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          : <svg className="header__mobile-menu" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.751 7.75056L7.75056 13.751M7.75056 7.75056L13.751 13.751M20.7516 10.7508C20.7516 16.2741 16.2741 20.7516 10.7508 20.7516C5.22751 20.7516 0.75 16.2741 0.75 10.7508C0.75 5.22751 5.22751 0.75 10.7508 0.75C16.2741 0.75 20.7516 5.22751 20.7516 10.7508Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          }
        </button>
      </header>
      <hr className="mobile-divider"/>
    </>
  );
}
