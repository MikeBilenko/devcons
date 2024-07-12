import React from "react";
import { CompanyInterface } from "./interface";
import Title from "ui/Title/Title";
import classes from "./styles.module.scss";

const Company = ({ description, image }: CompanyInterface) => {
  return (
    <div className={classes.company}>
      <Title title="Our company" />
      <div className={classes.companyContent}>
        <img
          className={classes.companyImage}
          src={`${process.env.REACT_APP_API_URL}${image.url}`}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
        <div
          className={classes.companyDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default Company;
