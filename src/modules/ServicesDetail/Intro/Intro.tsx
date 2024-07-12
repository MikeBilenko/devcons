import React, { Component } from "react";
import { IntroInterface } from "./interface";
import classes from "./styles.module.scss";
import Title from "ui/Title/Title";

class Intro extends Component<IntroInterface> {
  static defaultProps = {
    images: [],
  };

  render() {
    const { title, image, description } = this.props;

    return (
      <div className={classes.intro}>
        <div>
          <Title title={title} />
          <p
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <img
          key={image.alt}
          src={`${process.env.REACT_APP_API_URL}${image.url}`}
          alt={image.alt}
          className={classes.image}
        />
      </div>
    );
  }
}

export default Intro;
