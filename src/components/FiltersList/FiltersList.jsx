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
              onClick={() => onSelectFilter({ field, value })}
            >
              <button
                className={classNames(css.item, {
                  [css["item--selected"]]: selected,
                })}
                type="button"
              >
                <Icon className={css.icon} />
                <span className={css.text}>
                  {campersCategoriesLabels[categoryKey]}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
