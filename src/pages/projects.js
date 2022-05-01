import classes from "./projects.module.css";
import ProjectList from "../components/projects/ProjectList";

function ProjectsPage() {
  return (
    <div id="projects" className={classes.projects}>
      <div id="projects_shadow" className={classes.projects_shadow}></div>
      <div className={classes.container}>
        <h2 className={classes.subheading}>My Projects</h2>
        <ProjectList />
      </div>
    </div>
  );
}

export default ProjectsPage;
