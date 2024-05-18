import React from "react";
import classes from "./styles.module.scss";
import { TypeAnimation } from "react-type-animation";

const Intro: React.FC = () => {
  return (
    <div className={classes.intro}>
      <div className={classes.introLogo}>
        <img src="/logo/big-logo.svg" alt="dev cons" />
      </div>
      <div className={classes.introDescription}>
        <TypeAnimation
          speed={{ type: "keyStrokeDelayInMs", value: 100 }}
          sequence={[
            "Your trusted partner for \nsoftware development solutions.",
            2000,
          ]}
          repeat={0}
        />
      </div>
    </div>
  );
};

export default Intro;
