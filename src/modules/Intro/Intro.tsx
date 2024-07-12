import React, { Component } from "react";
import { IntroInterface, Image } from "./interface";
import classes from "./styles.module.scss";
import Title from "ui/Title/Title";

class Intro extends Component<IntroInterface> {
  static defaultProps = {
    images: [],
  };

  render() {
    const { title, title_underlined, images, description } = this.props;

    return (
      <div className={classes.intro}>
        <div>
          <Title underlined={title_underlined} title={title} />
          <p
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className={classes.images}>
          {images?.map((image: Image) => (
            <img
              key={image.image_serialized.alt}
              src={`${process.env.REACT_APP_API_URL}${image.image_serialized.url}`}
              alt={image.image_serialized.alt}
              height={image.image_serialized.height}
              width={image.image_serialized.width}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Intro;
