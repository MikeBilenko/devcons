import React from "react";
import Layout from "../modules/Layout/Layout";
import { Helmet } from "react-helmet";
import Intro from "components/HomeIntro/Intro";

const HomePage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Intro />
    </Layout>
  );
};

export default HomePage;
