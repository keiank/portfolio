interface HeaderNavProps {
  isOpen: boolean;
  onNavigate: () => void;
}

export function HeaderNav({ isOpen, onNavigate }: HeaderNavProps) {
  return (
    <nav
      id="header__nav"
      className={`header__nav${isOpen ? " header__nav_open" : ""}`}
    >
      <a href="#home" className="header__link" onClick={onNavigate}>
        Home
      </a>
      <a href="#skills" className="header__link" onClick={onNavigate}>
        Skills
      </a>
      <a href="#projects" className="header__link" onClick={onNavigate}>
        Projects
      </a>
      <a href="#contact" className="header__link" onClick={onNavigate}>
        Contact
      </a>
    </nav>
  );
}