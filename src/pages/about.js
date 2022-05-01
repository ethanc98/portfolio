import classes from "./about.module.css";

function AboutPage() {
  return (
    <div id="about" className={classes.about}>
      <div id="about_shadow" className={classes.about_shadow}></div>
      <div className={classes.container}>
        <div className={classes.subcontainer}>
          <h2 className={classes.subheading}>About Me</h2>
          <p>
            Hello world! I'm Ethan Calnan, a web developer based in the UK who
            enjoys making web applications that provide users with a pleasant
            and intuitive experience. I'm looking for an opportunity to continue
            developing my skills by contributing to and learning from an
            established team.
          </p>
        </div>
        <div className={classes.subcontainer}>
          <img
            className={classes.image}
            src={require("./image.jpg")}
            alt="screenshot"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
