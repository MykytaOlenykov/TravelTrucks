import Sidebar from "../Sidebar";
import css from "./Catalog.module.css";

export default function Catalog() {
  return (
    <section className={css.container}>
      <h1 className="visually-hidden">Catalog</h1>
      <div className={css.sidebar}>
        <Sidebar />
      </div>
      <div></div>
    </section>
  );
}
