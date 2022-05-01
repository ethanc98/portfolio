import classes from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ContactPage() {
  return (
    <div id="contact" className={classes.contact}>
      <div id="contact_shadow" className={classes.contact_shadow}></div>
      <div className={classes.container}>
        <h2 className={classes.subheading}>Get in Touch</h2>
        <div className={classes.container__content}>
          <p className={classes.footnote}>
            I'm currently on the lookout for new opportunities so feel free to
            get in touch, even if it's just to say hi!
          </p>
          <p className={classes.email}>ethan@ethancalnan.com</p>
          <div className={classes.socials}>
            <FontAwesomeIcon
              icon={faGithub}
              className={classes.icon_github}
              onClick={() => window.open("https://github.com/ethanc98")}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className={classes.icon_linkedin}
              onClick={() =>
                window.open("https://www.linkedin.com/in/ethancalnan/")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
