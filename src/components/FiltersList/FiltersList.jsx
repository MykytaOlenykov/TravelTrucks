import css from "./FiltersList.module.css";
import classNames from "classnames";
import { campersCategoriesIcons, campersCategoriesLabels } from "../../utils";

export default function FiltersList({ title, options, onSelectFilter }) {
  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      <div className={css.separator} />

      <ul className={css.list}>
        {options.map(({ value, field, selected, categoryKey }) => {
          const Icon = campersCategoriesIcons[categoryKey];

          return (
            <li
              key={`${categoryKey}:${field}=${value}`}
              className={classNames(css.item, {
                [css["item--selected"]]: selected,
              })}
              onClick={() => onSelectFilter({ field, value })}
            >
              <Icon className={css.icon} />
              <p className={css.text}>{campersCategoriesLabels[categoryKey]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
