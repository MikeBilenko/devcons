import React from "react";
import classes from "./styles.module.scss";

const Button = ({ children }: { children: React.ReactNode }) => {
  return <div className={classes.button}>{children}</div>;
};

export default Button;
