import React from "react";
import classes from "./styles.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className={classes.container}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
