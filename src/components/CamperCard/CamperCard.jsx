import CamperHeader from "../CamperHeader";
import Image from "../Image";
import css from "./CamperCard.module.css";

export default function CamperCard({
  name,
  description,
  rating,
  location,
  reviewsCount,
  imgSrc,
}) {
  return (
    <div className={css.container}>
      <Image src={imgSrc} alt={name} maxHeight={"100%"} maxWidth={292} />
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
      </div>
    </div>
  );
}
