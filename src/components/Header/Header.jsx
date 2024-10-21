import { NavLink, useNavigate } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/images/logo.svg";

const routes = [
  { title: "Home", path: "/" },
  { title: "Catalog", path: "/catalog" },
];

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className={css.header}>
      <div className={css.container}>
        <img
          className={css.logo}
          src={logo}
          alt="Site logo"
          onClick={() => navigate("/")}
        />

        <nav>
          <ul className={css.list}>
            {routes.map(({ path, title }) => (
              <li key={path}>
                <NavLink to={path} className={css.link}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
