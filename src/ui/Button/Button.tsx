import React from "react";
import classes from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const Button = ({
  children,
  disabled,
  variant,
  to,
  type = "button",
  className = "",
}: {
  variant?: "outlined" | "outlined-white" | "filled" | "text";
  children: React.ReactNode;
  disabled?: boolean;
  to?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
}) => {
  const navigate = useNavigate();

  const click = () => {
    if (to?.length) {
      navigate(to);
    }
  };

  return (
    <button
      className={`${classes.button}
      ${variant === "outlined-white" ? classes.outlinedWhite : ""}
      ${variant === "outlined" ? classes.outlined : ""} ${
        variant === "text" ? classes.text : ""
      } ${className} `}
      disabled={disabled}
      onClick={click}
      type={type}
    >
      {variant !== "outlined" && variant !== "text" && <>{children}</>}
      {variant === "outlined" ||
        (variant === "text" && <span>{children}</span>)}
    </button>
  );
};

export default Button;
