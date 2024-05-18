import React from "react";
import classes from "./styles.module.scss";
import containerClasses from "../styles.module.scss";
import Button from "ui/Button/Button";
import Link from "ui/Link/Link";

const Header = () => {
  return (
    <header className={`${containerClasses.container} ${classes.header}`}>
      <img src="/logo/logo.svg" alt="logo for app" />
      <nav className={classes.nav}>
        <Link variant="header" path="/about">
          About us
        </Link>
        <Link variant="header" path="/about">
          Blog
        </Link>
        <Link variant="header" path="/about">
          Services
        </Link>
        <Link variant="header" path="/about">
          Projects
        </Link>
        <Button>Contact Us</Button>
      </nav>
    </header>
  );
};

export default Header;
