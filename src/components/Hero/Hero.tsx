import profile from "../../data/profile";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__content-wrapper">
        <p className="hero__greeting">HI, I'M</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h3 className="hero__title">{profile.title}</h3>
        <p className="hero__blurb">{profile.blurb}</p>
        <div className="hero__buttons">
          <a className="hero__button hero__portfolio-btn" href="#projects">
            View my work
          </a>
          <a className="hero__button hero__contact-btn" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
