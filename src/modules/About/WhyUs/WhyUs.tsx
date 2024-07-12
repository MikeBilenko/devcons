import React from "react";
import { WhyUsOrderable } from "./interface";
import Title from "ui/Title/Title";
import classes from "./styles.module.scss";
import WhyUsItem from "./WhyUsItem";

const WhyUs: React.FC<{ why_us: WhyUsOrderable[] }> = ({ why_us }) => {
  return (
    <div className={classes.why_us}>
      <Title title="Why Dev consulting" />
      <div className={classes.why_us_grid}>
        {why_us.map((item) => (
          <WhyUsItem why_us_item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
