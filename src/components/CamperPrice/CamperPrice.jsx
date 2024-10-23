import css from "./CamperPrice.module.css";

export default function CamperPrice({ price }) {
  return <p className={css.text}>&euro;{price.toFixed(2)}</p>;
}
