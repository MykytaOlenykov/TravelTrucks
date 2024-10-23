import { BsFillStarFill, BsMap } from "react-icons/bs";
import css from "./CamperHeader.module.css";
import classNames from "classnames";

export default function CamperHeader({
  camperName,
  camperRating,
  camperLocation,
  camperReviewsCount,
}) {
  return (
    <div>
      <h2 className={css.title}>{camperName}</h2>
      <div className={css.container}>
        <p className={classNames(css.text, css["text--underline"])}>
          <BsFillStarFill
            className={classNames(css.icon, css["icon--accent"])}
          />
          {camperRating}({camperReviewsCount} Reviews)
        </p>
        <p className={css.text}>
          <BsMap className={css.icon} />
          {camperLocation}
        </p>
      </div>
    </div>
  );
}
