import css from "./Input.module.css";

export default function Input({
  className = "",
  element = "input",
  ...otherProps
}) {
  if (element === "textarea") {
    return (
      <textarea
        className={`${css.input} ${className}`}
        {...otherProps}
      ></textarea>
    );
  }

  return <input className={`${css.input} ${className}`} {...otherProps} />;
}
