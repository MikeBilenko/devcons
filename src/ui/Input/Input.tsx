import React from "react";
import classes from "./styles.module.scss";

interface InputInterface {
  type: "text" | "email";
  label?: string;
  placeholder?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  error?: boolean;
  errorMessage?: string;
}

const Input: React.FC<InputInterface> = ({
  type,
  label,
  placeholder,
  value,
  setValue,
  error = false,
  errorMessage,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(event.target.value);
    }
  };

  return (
    <label htmlFor="" className={classes.label}>
      <span>{label}</span>
      <input
        type={type}
        className={`${classes.input} ${error ? classes.error : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {error && <div className={classes.errorBlock}>{errorMessage}</div>}
    </label>
  );
};

export default Input;
