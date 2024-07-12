import React, { useEffect, useState } from "react";
import Layout from "../modules/Layout/Layout";
import { Helmet } from "react-helmet";
import Intro from "modules/Home/HomeIntro/Intro";
import ServicesList from "modules/ServicesList/ServicesList";
import { getHomeData } from "./api/home.api";
// import Projects from "modules/Home/Projects/Projects";
import ContactForm from "components/ContactForm/ContactForm";
import CalculatePriceForm from "components/CalculatePriceForm/CalculatePriceForm";
import { HomePageInterface } from "./interfaces/home.interface";

const HomePage: React.FC = () => {
  const [page, setPage] = useState<HomePageInterface | null>(null);

  const getData = async () => {
    const response = await getHomeData();
    setPage(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      {page && (
        <>
          <Helmet>
            <title>{page?.meta.seo_title}</title>
            <meta name="description" content={page?.meta.search_description} />
          </Helmet>

          <Intro subtitle={page.subtitle} />

          <ServicesList
            title="We are experts in these services"
            services={page.services[0]}
          />
          {/* <Projects /> */}
          <CalculatePriceForm />
          <ContactForm />
        </>
      )}
    </Layout>
  );
};

export default HomePage;
