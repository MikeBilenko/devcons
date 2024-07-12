import React, { useEffect, useState } from "react";
import Layout from "../modules/Layout/Layout";
import { Helmet } from "react-helmet";
import Intro from "modules/Intro/Intro";
import ServicesList from "modules/ServicesList/ServicesList";
import { getServicesData } from "./api/services.api";
import ContactForm from "components/ContactForm/ContactForm";
import { ServicesPageInterface } from "./interfaces/services.interface";

const ServicesPage = () => {
  const [page, setPage] = useState<ServicesPageInterface | null>(null);
  const getData = async () => {
    const response = await getServicesData();
    setPage(response.data);
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
          <Intro
            title={page.custom_title}
            title_underlined={page.custom_title_selected}
            images={page.services_images}
            description={page.description}
          />
          <ServicesList title="Our services" services={page.services[0]} />
          <ContactForm />
        </>
      )}
    </Layout>
  );
};

export default ServicesPage;
