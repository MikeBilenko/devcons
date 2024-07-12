import React, { useEffect, useState } from "react";
import axiosInstance from "pages/api/config";
import classes from "./styles.module.scss";
import { WhyInterface, ImageInterface } from "./interface";

const WhyItem: React.FC<{ why: WhyInterface }> = ({ why }) => {
  const [image, setImage] = useState<ImageInterface | null>(null);

  const getIcon = async () => {
    const response = await axiosInstance.get(`api/v2/images/${why.icon}/`);
    setImage(response.data);
  };

  // @ts-ignore
  useEffect(() => {
    getIcon();
    // eslint-disable-next-line
  }, []); // @ts-ignore es-lint
  return (
    <div className={classes.whyItem}>
      <div className={classes.whyIconWrapper}>
        {image && (
          <img
            src={`${process.env.REACT_APP_API_URL}${image.meta!.download_url}`}
            alt={image!.title}
            className={classes.whyIcon}
          />
        )}
      </div>
      <div className={classes.whyText}>
        <div className={classes.whyTitle}>{why.title}</div>
        <div className={classes.whyDescription}>{why.description}</div>
      </div>
    </div>
  );
};

export default WhyItem;
