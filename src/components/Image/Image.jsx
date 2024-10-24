import classNames from "classnames";
import css from "./Image.module.css";

export default function Image({
  className,
  width,
  height,
  maxWidth,
  maxHeight,
  src,
  alt,
  onClick,
}) {
  return (
    <div
      className={classNames(css.thumb, className)}
      style={{ width, height, maxWidth, maxHeight }}
      onClick={onClick}
    >
      <img className={css.img} src={src} alt={alt} />
    </div>
  );
}
