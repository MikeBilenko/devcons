import Title from "ui/Title/Title";
import React, { Component, useState, useRef, useEffect } from "react";
import classes from "./styles.module.scss";
import { IoIosArrowUp } from "react-icons/io";
import { FAQInterface, FaqItem } from "./interface";

const AccordionItem = ({ faq }: { faq: FaqItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMaxHeight(
      isOpen ? `calc(${content?.current?.scrollHeight}px + 10px)` : "0px"
    );
  }, [isOpen]);

  return (
    <div className={classes.accordionItem} onClick={() => setIsOpen(!isOpen)}>
      <div className={classes.accordionQuestion}>
        <span>{faq.question}</span>
        <span
          className={`${classes.accordionIcon} ${isOpen ? classes.active : ""}`}
        >
          <IoIosArrowUp />
        </span>
      </div>
      <div
        className={classes.accordionAnswer}
        style={{ maxHeight, marginTop: isOpen ? "10px" : "" }}
        ref={content}
      >
        {faq.answer}
      </div>
    </div>
  );
};

export default class FAQ extends Component<FAQInterface> {
  render() {
    const { faqs } = this.props;

    return (
      <div className={classes.faqSection}>
        <Title title={faqs.value.title} />
        <div className={classes.faqItems}>
          {faqs.value.faqs.map((faq, index) => (
            <AccordionItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    );
  }
}
