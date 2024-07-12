import React, { Component } from "react";
import Layout from "../modules/Layout/Layout";
import { Helmet } from "react-helmet";
import { AboutPageInterface } from "./interfaces/about.interface";
import { getAboutData } from "./api/about.api";
import Intro from "modules/Intro/Intro";
import Company from "modules/About/Company/Company";
import WhyUs from "modules/About/WhyUs/WhyUs";
import ContactForm from "components/ContactForm/ContactForm";

interface AboutPageState {
  page: AboutPageInterface | null;
}

class AboutPage extends Component<{}, AboutPageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      page: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const response = await getAboutData();
      this.setState({ page: response.data });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  };

  render() {
    const { page } = this.state;

    return (
      <Layout>
        {page && (
          <>
            <Helmet>
              <title>{page.meta.seo_title}</title>
              <meta name="description" content={page.meta.search_description} />
            </Helmet>
            <Intro
              title={page.custom_title}
              title_underlined={page.custom_title_selected}
              images={page.about_images}
              description={page.description}
            />
            <Company
              description={page.company_description}
              image={page.company_image_serialized}
            />
            <WhyUs why_us={page.about_why_us} />
            <ContactForm />
          </>
        )}
      </Layout>
    );
  }
}

export default AboutPage;
