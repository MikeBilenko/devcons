import React from "react";
import classes from "./styles.module.scss";
import { TypeAnimation } from "react-type-animation";
// import HomeIntroCard from "components/HomeIntroCard/HomeIntroCard";

const Intro: React.FC<{ subtitle: string }> = ({ subtitle }) => {
  const words = subtitle.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    result.push(words[i]);
    if ((i + 1) % 4 === 0 && i !== words.length - 1) {
      result.push("\n");
    }
  }
  return (
    <div className={classes.intro}>
      <img
        src="/logo/big-logo.svg"
        alt="dev cons"
        className={classes.introLogo}
      />

      <div className={classes.introDescription}>
        <TypeAnimation
          speed={{ type: "keyStrokeDelayInMs", value: 100 }}
          sequence={[result.join(" "), 2000]}
          repeat={0}
        />
      </div>
      {/* <div className={classes.introCardsWrapper}>
        <HomeIntroCard />
        <HomeIntroCard />
        <HomeIntroCard />
      </div> */}
    </div>
  );
};

export default Intro;
