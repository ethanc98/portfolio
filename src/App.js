import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import ContactPage from "./pages/contact";
import Layout from "./components/layout/Layout";

import classes from "./App.module.css";

function App() {
  return (
    <Layout>
      <div className={classes.sections}>
        <HomePage className={classes.section} />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </div>
    </Layout>
  );
}

export default App;
