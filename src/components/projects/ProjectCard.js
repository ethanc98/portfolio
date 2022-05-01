import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="separator"></div>
      <div className="card__left">
        <div className="title">{props.title}</div>
        <p className="text">{props.description}</p>
        <p className="text">{props.technologies}</p>
        <div className="links">
          <a href={props.site} className="link">
            Live Site
          </a>
          <a href={props.code} className="link">
            Code
          </a>
        </div>
      </div>
      <img className="image" src={props.image} alt="screenshot"></img>
      <div className="dots">
        <div className={props.dotNum}></div>
        <div className={props.dotNum}></div>
        <div className={props.dotNum}></div>
        <div className={props.dotNum}></div>
      </div>
      <div className="title_mobile">{props.title}</div>
    </div>
  );
}

export default ProjectCard;
