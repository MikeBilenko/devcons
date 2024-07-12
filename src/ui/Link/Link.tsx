import React from "react";
import { Link as CustomLink } from "react-router-dom";
import classes from "./styles.module.scss";

const Link = ({
  path,
  variant,
  children,
  className,
}: {
  path: string;
  variant?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <CustomLink
      className={`${classes.link} ${
        variant === "header" ? classes.headerLink : ""
      } ${className}`}
      to={path}
    >
      {variant !== "header" && children}
      {variant === "header" && <span>{children}</span>}
    </CustomLink>
  );
};

export default Link;
