import React from "react";
import classes from "./styles.module.scss";
import Link from "ui/Link/Link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ServiceCard: React.FC<{ service: any }> = ({ service }) => {
  return (
    <div className={classes.serviceCard}>
      <div className={classes.serviceTitle}>{service.title}</div>
      <div className={classes.serviceDescription}>
        <span dangerouslySetInnerHTML={{ __html: service.text }} />
        <Link
          path={`/services/${service.button_page}/`}
          className={classes.serviceLink}
        >
          See More <MdOutlineKeyboardArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
