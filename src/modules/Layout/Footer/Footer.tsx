import React from "react";
import classes from "./styles.module.scss";
import Link from "ui/Link/Link";

const Footer = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <img
          src="/logo/logo-dark.svg"
          alt="footer logo dark for mb dev cons"
          className={classes.footerLogo}
        />
        <div className={classes.footerLinks}>
          <div className={classes.footerLinksColumn}>
            <h3 className={classes.footerLinksColumnTitle}>Company</h3>
            <div className={classes.footerLinksColumnList}>
              <Link path="/about">About Us</Link>
              <Link path="/services">Services</Link>
              {/* <Link path="/about">Projects</Link> */}
            </div>
          </div>
          <div className={classes.footerLinksColumn}>
            <h3 className={classes.footerLinksColumnTitle}>Social Media</h3>
            <div className={classes.footerLinksColumnList}>
              {/* <Link path="/about">Facebook</Link> */}
              <Link
                path="https://www.instagram.com/mbdevconsuting.insta/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </Link>
              {/* <Link path="/about">Linkedin</Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footerCopy}>
        Copyright © {getYear()} dev consulting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
