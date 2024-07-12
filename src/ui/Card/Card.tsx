import React from "react";
import classes from "./styles.module.scss";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
