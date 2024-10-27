import { forwardRef } from "react";
import css from "./Input.module.css";

function Input({ className = "", element = "input", ...otherProps }, ref) {
  if (element === "textarea") {
    return (
      <textarea
        ref={ref}
        className={`${css.input} ${className}`}
        {...otherProps}
      ></textarea>
    );
  }

  return (
    <input ref={ref} className={`${css.input} ${className}`} {...otherProps} />
  );
}

export default forwardRef(Input);
