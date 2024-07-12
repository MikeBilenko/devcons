import React from "react";
import classes from "./styles.module.scss";
import Title from "ui/Title/Title";
import WhyItem from "./WhyItem";
import { WhyInterface, WhysListInterface } from "./interface";

const WhyChooseUs: React.FC<{ whys: WhysListInterface }> = ({ whys }) => {
  return (
    <div className={classes.whys}>
      <Title title={whys.value.title} />
      <div className={classes.whyList}>
        {whys.value.why_sections.map((item: WhyInterface) => (
          <WhyItem why={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
