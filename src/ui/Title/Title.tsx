import React from "react";
import classes from "./styles.module.scss";

const Title = ({
  title,
  underlined = "",
}: {
  title: string;
  underlined?: string;
}) => {
  const underlinedIndex =
    typeof title === "string" ? title.indexOf(underlined) : -1;

  return (
    <h1 className={classes.title}>
      {underlinedIndex !== -1 ? (
        <>
          {title.substring(0, underlinedIndex)}
          <span className={classes.underlined}>{underlined}</span>
          {title.substring(underlinedIndex + underlined.length)}
        </>
      ) : (
        title
      )}
    </h1>
  );
};

export default Title;
