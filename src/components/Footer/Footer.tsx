import "./Footer.css";
import { Contact } from "../Contact/Contact";

export function Footer() {
  return (
    <section id="contact" className="footer">
      <h1 className="footer__heading">Get in Touch</h1>
      <p className="footer__invitation">
        Open position? Interested in hiring me on contract?
      </p>
      <Contact />
    </section>
  );
}
