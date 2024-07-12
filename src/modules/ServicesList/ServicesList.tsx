import Title from "ui/Title/Title";
import React from "react";
import classes from "./styles.module.scss";
import ServiceCard from "components/ServiceCard/ServiceCard";

const ServicesList: React.FC<{ title: string; services?: any }> = ({
  title,
  services,
}) => {
  return (
    <div className={classes.servicesWrapper}>
      <Title title={title} />
      <div className={classes.servicesList}>
        {services.value.services.map((service: any) => (
          <ServiceCard service={service} key={service.button_page} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
