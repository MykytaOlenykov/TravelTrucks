import CamperCard from "../CamperCard";
import css from "./CampersList.module.css";

export default function CampersList({ campers }) {
  return (
    <ul className={css.list}>
      {campers.map(
        ({ id, name, description, rating, location, gallery, reviews }) => (
          <li key={id}>
            <CamperCard
              name={name}
              description={description}
              rating={rating}
              location={location}
              imgSrc={gallery[0]?.thumb}
              reviewsCount={reviews.length}
            />
          </li>
        )
      )}
    </ul>
  );
}
