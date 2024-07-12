import React from "react";
import classes from "./styles.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <main className={classes.container}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
