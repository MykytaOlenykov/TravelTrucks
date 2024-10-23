import css from "./FiltersList.module.css";
import classNames from "classnames";
import { campersCategoriesIcons } from "../../utils";

export default function FiltersList({ title, options, onSelectFilter }) {
  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      <div className={css.separator} />

      <ul className={css.list}>
        {options.map(({ value, title, field, selected, icon }) => {
          const Icon = campersCategoriesIcons[icon];

          return (
            <li
              key={`${field}=${value}`}
              className={classNames(css.item, {
                [css["item--selected"]]: selected,
              })}
              onClick={() => onSelectFilter({ field, value })}
            >
              <Icon className={css.icon} />
              <p className={css.text}>{title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
