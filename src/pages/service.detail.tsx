import ContactForm from "components/ContactForm/ContactForm";
import Layout from "modules/Layout/Layout";
import FAQ from "modules/ServicesDetail/FAQ/FAQ";
import Intro from "modules/ServicesDetail/Intro/Intro";
import Stages from "modules/ServicesDetail/Stages/Stages";
import WhyChooseUs from "modules/ServicesDetail/WhyChooseUs/WhyChooseUs";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getServicesDetailData } from "./api/services.api";
import { useParams } from "react-router-dom";

function ServiceDetail() {
  const { id } = useParams();
  const [page, setPage] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getServicesDetailData(Number(id)); // Assuming getServicesDetailData takes an id parameter
        setPage(response.data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchData();
  }, [id]);

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
            description={page.description}
            image={page.image_serialized}
          />
          <WhyChooseUs
            whys={page.content.find((item: any) => item.type === "why")}
          />
          <Stages
            stages={page.content.find((item: any) => item.type === "stages")}
          />
          <FAQ faqs={page.content.find((item: any) => item.type === "faq")} />
          <ContactForm />
        </>
      )}
    </Layout>
  );
}

export default ServiceDetail;
