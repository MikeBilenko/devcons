import Title from "ui/Title/Title";
import Layout from "../modules/Layout/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Title title="404" />
      <Title title="Not Found." />

      <Link
        style={{
          display: "block",
          color: "#fff",
          fontSize: "1.2rem",
          textAlign: "center",
          marginBottom: "2rem",
        }}
        to="/"
      >
        Click here to get to home page.
      </Link>
    </Layout>
  );
};

export default NotFound;
