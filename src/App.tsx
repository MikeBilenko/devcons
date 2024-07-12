import React from "react";
import HomePage from "./pages";
import { Route, Routes } from "react-router-dom";
import NotFound from "pages/404";
import AboutPage from "pages/about";
import ContactUsPage from "pages/contacts";
import ServicesPage from "pages/services";
import ServiceDetail from "pages/service.detail";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
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
}

export default App;
