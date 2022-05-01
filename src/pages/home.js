import classes from "./home.module.css";

function HomePage() {
  return (
    <div id="home" className={classes.home}>
      <div id="home_shadow" className={classes.home_shadow}></div>
      <div className={classes.container}>
        <h1 className={classes.heading}>Ethan Calnan</h1>
        <h2 className={classes.sub_heading}>Web Developer</h2>
      </div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
      </style>
    </div>
  );
}

export default HomePage;
