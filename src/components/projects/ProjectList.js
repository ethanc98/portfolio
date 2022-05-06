import ProjectCard from "./ProjectCard";
import classes from "./ProjectList.module.css";

function ProjectList(props) {
  return (
    <div>
      <ProjectCard
        title="newfan"
        description="A tool that helps you create Spotify playlists based on artist setlists."
        technologies="Node.js, HTML, CSS, JS, Spotify API, Setlist.fm API."
        image={require("./images/newfan.jpeg")}
        site="https://newfan.site"
        code="https://github.com/ethanc98/newfan"
        dotNum="dot1"
      />
      <ProjectCard
        title="myCookbook"
        description="A site that allows you to create recipes and save them to your own
          account."
        technologies="Node.js, HTML, CSS, JS, MongoDB Atlas, Passport.js, Nodemailer."
        image={require("./images/mycookbook.jpeg")}
        site="http://mycookbook.live"
        code="https://github.com/ethanc98/mycookbook"
        dotNum="dot2"
      />
      <ProjectCard
        title="QUIZ POINT"
        description="A quiz app that uses the Open Trivia API to generate questions."
        technologies="Node.js, HTML, CSS, JS, Open Trivia API."
        image={require("./images/quizpoint.jpeg")}
        site="http://quizpoint123.herokuapp.com"
        code="https://github.com/ethanc98/quizpoint"
        dotNum="dot3"
      />
      <ProjectCard
        title="Note Learner"
        description="A randomizer app I built for learning note locations on a
          fretboard."
        technologies="Node.js, HTML, CSS, JS."
        image={require("./images/notelearner.jpeg")}
        site="http://fretboardlearner.herokuapp.com"
        code="https://github.com/ethanc98/fretboard-learner"
        dotNum="dot4"
      />
      <div className={classes.footnote}>
        *plus this site (built with React).
      </div>
    </div>
  );
}

export default ProjectList;
