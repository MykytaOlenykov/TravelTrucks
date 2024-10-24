import { BsFillStarFill } from "react-icons/bs";
import classNames from "classnames";

import css from "./CamperReviews.module.css";

export default function CamperReviews({ reviews }) {
  return (
    <ul className={css.list}>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }, idx) => (
        <li key={idx}>
          <div className={css.header}>
            <div className={css.avatar}>{reviewer_name[0]}</div>

            <div>
              <p className={css.name}>{reviewer_name}</p>
              <ul className={css.rating}>
                {[...Array(5)].map((_, idx) => (
                  <li key={idx}>
                    <BsFillStarFill
                      className={classNames(css.icon, {
                        [css["icon--accent"]]: idx + 1 <= reviewer_rating,
                      })}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className={css.text}>{comment}</p>
        </li>
      ))}
    </ul>
  );
}
