import css from "./Input.module.css";

export default function Input({ className = "", ...otherProps }) {
  return <input className={`${css.input} ${className}`} {...otherProps} />;
}
