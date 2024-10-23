import { getCamperCategories } from "../../utils";
import CamperCard from "../CamperCard";
import css from "./CampersList.module.css";

export default function CampersList({ campers }) {
  return (
    <ul className={css.list}>
      {campers.map((camper) => {
        const {
          id,
          name,
          description,
          rating,
          location,
          gallery,
          reviews,
          price,
        } = camper;

        return (
          <li key={id}>
            <CamperCard
              id={id}
              name={name}
              description={description}
              rating={rating}
              location={location}
              price={price}
              imgSrc={gallery[0]?.thumb}
              reviewsCount={reviews.length}
              {...getCamperCategories(camper)}
            />
          </li>
        );
      })}
    </ul>
  );
}
