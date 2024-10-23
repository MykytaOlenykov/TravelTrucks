import { useNavigate } from "react-router-dom";

import CamperHeader from "../CamperHeader";
import CategoriesList from "../CategoriesList";
import Image from "../Image";
import Button from "../Button";
import css from "./CamperCard.module.css";

export default function CamperCard({
  id,
  name,
  description,
  rating,
  location,
  reviewsCount,
  imgSrc,
  ...categories
}) {
  const navigate = useNavigate();

  return (
    <div className={css.container}>
      <Image src={imgSrc} alt={name} maxHeight={"100%"} width={292} />
      <div className={css.info}>
        <div className={css.header}>
          <CamperHeader
            camperName={name}
            camperRating={rating}
            camperLocation={location}
            camperReviewsCount={reviewsCount}
          />
        </div>

        <p className={css.desc}>{description}</p>

        <CategoriesList maxShow={5} {...categories} />

        <Button
          className={css.button}
          type="button"
          onClick={() => navigate(`/category/${id}`)}
        >
          Show more
        </Button>
      </div>
    </div>
  );
}
