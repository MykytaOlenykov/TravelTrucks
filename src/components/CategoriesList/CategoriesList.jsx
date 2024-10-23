import { campersCategoriesIcons, campersCategoriesLabels } from "../../utils";
import css from "./CategoriesList.module.css";

export default function CategoriesList({ maxShow, ...categories }) {
  const categoriesKeys = Object.keys(categories);

  const visibledCategories = maxShow
    ? categoriesKeys.slice(0, maxShow)
    : categoriesKeys;

  const showMore = categoriesKeys.length > maxShow;

  return (
    <ul className={css.list}>
      {visibledCategories.map((categoryKey) => {
        const Icon = campersCategoriesIcons[categoryKey];

        return (
          <li className={css.item} key={categoryKey}>
            <Icon className={css.icon} />
            <p className={css.text}>{campersCategoriesLabels[categoryKey]}</p>
          </li>
        );
      })}
      {showMore && (
        <li className={css.item}>
          <p className={css.text}>...</p>
        </li>
      )}
    </ul>
  );
}
