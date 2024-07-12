import Layout from "../modules/Layout/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <p>Not Found.</p>
      <Link to="/">Home</Link>
    </Layout>
  );
};

export default NotFound;
