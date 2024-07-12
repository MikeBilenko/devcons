import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import classes from "./styles.module.scss";
import Button from "ui/Button/Button";

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isTablet = window.matchMedia("(max-width: 768px)").matches;

      if (isTablet && open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.removeAttribute("style");
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);
  return (
    <div className={classes.headerMobile}>
      <div className={`${classes.menu} ${open ? classes.active : ""}`}>
        <div className={classes.menuContent}>
          <Button variant="outlined-white" className={classes.menuButton}>
            About us
          </Button>
          <Button variant="outlined-white" className={classes.menuButton}>
            Services
          </Button>
        </div>
        {/* .menuIcon */}
      </div>
      <div
        className={`${classes.menuIcon} ${open ? classes.active : ""}`}
        onClick={() => setOpen(!open)}
      >
        {open && <IoCloseSharp />}
        {!open && <IoMenuSharp />}
      </div>
    </div>
  );
};

export default HeaderMobile;
