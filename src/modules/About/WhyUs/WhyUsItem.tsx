import React from "react";
import classes from "./styles.module.scss";
import { WhyUsOrderable } from "./interface";
import Card from "ui/Card/Card";

const WhyUsItem: React.FC<{ why_us_item: WhyUsOrderable }> = ({
  why_us_item,
}) => {
  return (
    <Card>
      <div className={classes.why_us_item_header}>
        <img
          src={`${process.env.REACT_APP_API_URL}${why_us_item.icon_serialized.url}`}
          alt={why_us_item.icon_serialized.alt}
          width={why_us_item.icon_serialized.width}
          height={why_us_item.icon_serialized.height}
        />
        <div className={classes.why_us_item_title}>{why_us_item.title}</div>
      </div>
      <p className={classes.why_us_item_description}>
        {why_us_item.description}
      </p>
    </Card>
  );
};

export default WhyUsItem;
