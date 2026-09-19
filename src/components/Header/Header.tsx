import "./Header.css"
import profile from "../../data/profile";

export function Header() {
    return (
        <header className="header">
            <a className="header__brand" href="#home">
                {profile.name}
            </a>
            <nav className="header__nav">
                <a href="#home" className="header__link">Home</a>
                <a href="#skills" className="header__link">Skills</a>
                <a href="#projects" className="header__link">Projects</a>
                <a href="#contact" className="header__link">Contact</a>
            </nav>
        </header>
    );
}