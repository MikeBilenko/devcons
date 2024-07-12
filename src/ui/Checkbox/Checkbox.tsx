import React from "react";
import classes from "./styles.module.scss";

interface CheckboxInterface {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxInterface> = ({
  label,
  checked,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className={classes.checkboxLabel}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={classes.checkboxInput}
      />
      <span className={classes.customCheckbox}></span>
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
