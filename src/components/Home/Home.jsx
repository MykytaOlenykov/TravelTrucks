import { useNavigate } from "react-router-dom";
import Button from "../Button";
import css from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>

        <Button
          style={{ minWidth: 173 }}
          type="button"
          onClick={() => navigate("/catalog")}
        >
          View Now
        </Button>
      </div>
    </section>
  );
}
