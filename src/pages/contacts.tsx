import React from "react";
import Layout from "../modules/Layout/Layout";
import { Helmet } from "react-helmet";
import ContactForm from "components/ContactForm/ContactForm";

const ContactUsPage = () => {
  // TODO: finish this page meta data.
  return (
    <Layout>
      <Helmet>
        <title>DEV Cons | Contact Us</title>
        <meta
          name="description"
          content="We value your feedback and inquiries and will respond promptly. Thank you for choosing DEV Cons."
        />
      </Helmet>
      <ContactForm />
    </Layout>
  );
};

export default ContactUsPage;
