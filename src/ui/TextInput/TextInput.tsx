import React from "react";
import classes from "./styles.module.scss";

interface InputInterface {
  label?: string;
  placeholder?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  error?: boolean;
  errorMessage?: string;
}

const TextInput: React.FC<InputInterface> = ({
  label = "",
  placeholder = "",
  value = "",
  setValue,
  error,
  errorMessage,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (setValue) {
      setValue(event.target.value);
    }
  };

  const inputId = `textarea-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <label htmlFor={inputId} className={classes.label}>
      {label && <span>{label}</span>}
      <textarea
        id={inputId}
        className={`${classes.input} ${error ? classes.error : ""}`}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      {error && <div className={classes.errorBlock}>{errorMessage}</div>}
    </label>
  );
};

export default TextInput;
