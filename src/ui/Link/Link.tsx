import React from "react";
import { Link as CustomLink } from "react-router-dom";
import classes from "./styles.module.scss";

const Link = ({
  path,
  variant,
  children,
}: {
  path: string;
  variant?: string;
  children: React.ReactNode;
}) => {
  return (
    <CustomLink
      className={`${classes.link} ${
        variant === "header" ? classes.headerLink : ""
      }`}
      to={path}
    >
      {children}
    </CustomLink>
  );
};

export default Link;
