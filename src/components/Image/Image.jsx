import css from "./Image.module.css";

export default function Image({
  width,
  height,
  maxWidth,
  maxHeight,
  src,
  alt,
}) {
  return (
    <div className={css.thumb} style={{ width, height, maxWidth, maxHeight }}>
      <img className={css.img} src={src} alt={alt} />
    </div>
  );
}
