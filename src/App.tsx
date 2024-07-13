import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import HomePage from "./pages";
import { Route, Routes } from "react-router-dom";
import NotFound from "pages/404";
import AboutPage from "pages/about";
import ContactUsPage from "pages/contacts";
import ServicesPage from "pages/services";
import ServiceDetail from "pages/service.detail";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  useEffect(() => {
    const gtagId = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;

    if (gtagId) {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
      document.head.appendChild(script1);

      // Initialize Google Analytics
      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtagId}');
      `;
      document.head.appendChild(script2);

      // Clean up the scripts when the component unmounts
      return () => {
        document.head.removeChild(script1);
        document.head.removeChild(script2);
      };
    }
  }, []);

  return (
    <>
      <Helmet>
        {/* Add Google Analytics script if the ID is available */}
        {process.env.REACT_APP_GOOGLE_ANALYTICS_ID && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}`}
          ></script>
        )}
        {process.env.REACT_APP_GOOGLE_ANALYTICS_ID && (
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}');
            `}
          </script>
        )}
      </Helmet>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/services/" element={<ServicesPage />} />
        <Route path="/services/:id/" element={<ServiceDetail />} />
        <Route path="/contacts/" element={<ContactUsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
