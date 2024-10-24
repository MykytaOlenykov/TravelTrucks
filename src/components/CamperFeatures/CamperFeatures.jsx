import CategoriesList from "../CategoriesList";
import css from "./CamperFeatures.module.css";

export default function CamperFeatures({
  form,
  length,
  width,
  height,
  tank,
  consumption,
  ...categories
}) {
  return (
    <div className={css.container}>
      <div style={{ marginBottom: "auto" }}>
        <CategoriesList {...categories} />
      </div>

      <h3 className={css.title}>Vehicle details</h3>

      <div className={css.separator} />

      <ul className={css.list}>
        <li className={css.item}>
          <p>Form</p>
          <p className={css.uppercase}>{form}</p>
        </li>
        <li className={css.item}>
          <p>Length</p>
          <p>{length}</p>
        </li>
        <li className={css.item}>
          <p>Width</p>
          <p>{width}</p>
        </li>
        <li className={css.item}>
          <p>Height</p>
          <p>{height}</p>
        </li>
        <li className={css.item}>
          <p>Tank</p>
          <p>{tank}</p>
        </li>
        <li className={css.item}>
          <p>Consumption</p>
          <p>{consumption}</p>
        </li>
      </ul>
    </div>
  );
}
