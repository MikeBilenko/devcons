import React from "react";
import classes from "./styles.module.scss";

const HomeIntroCard = () => {
  return (
    <div className={classes.introCard}>
      <div className={classes.introTitle}>
        <div>5 years</div>
        <div className={classes.subtitle}>of experience</div>
      </div>
      <div className={classes.introDescription}>
        Dev consulting custom software delivery expertise covers such
        data-intensive and demanding sectors as Financial
        Services, Healthcare, Media & Entertainment, Logistics, and more
      </div>
    </div>
  );
};

export default HomeIntroCard;
