import css from "./FiltersList.module.css";

export default function FiltersList({ title, options }) {
  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      <div className={css.separator} />

      <ul className={css.list}>
        {options.map(({ key, icon: Icon }) => (
          <li key={key} className={css.item}>
            <Icon className={css.icon} />
            <p className={css.text}>{key}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
