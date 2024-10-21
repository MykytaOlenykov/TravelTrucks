import css from "./Button.module.css";

export default function Button({ className, ...otherProps }) {
  return <button className={`${css.button} ${className}`} {...otherProps} />;
}
