import Title from "ui/Title/Title";
import Project from "components/Project/Project";
import React from "react";
import classes from "./styles.module.scss";
import Button from "ui/Button/Button";

const Projects: React.FC = () => {
  return (
    <div className={classes.projects_wrapper}>
      <Title title="Our Projects" />
      <div className={classes.projects_grid}>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>

      <Button to="/projects">View All Projects</Button>
    </div>
  );
};

export default Projects;
