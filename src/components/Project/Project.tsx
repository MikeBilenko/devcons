import React from "react";
import classes from "./styles.module.scss";

const Project = () => {
  return (
    <div className={classes.project}>
      <img src="./project/image.png" alt="" className={classes.image} />
      <div className={classes.project_title}>
        <div className={classes.title}>Sumsung</div>
        <div className={classes.subtitle}>
          An Application for Samsung Smart TVs
        </div>
      </div>
    </div>
  );
};

export default Project;
