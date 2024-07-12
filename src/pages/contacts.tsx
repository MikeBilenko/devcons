import React from "react";
import Layout from "../modules/Layout/Layout";
import { Helmet } from "react-helmet";
import ContactForm from "components/ContactForm/ContactForm";

const ContactUsPage = () => {
  // TODO: finish this page meta data.
  return (
    <Layout>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="" />
      </Helmet>
      <ContactForm />
    </Layout>
  );
};

export default ContactUsPage;
