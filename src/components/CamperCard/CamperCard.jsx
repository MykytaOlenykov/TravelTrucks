import CamperHeader from "../CamperHeader";
import CategoriesList from "../CategoriesList";
import Image from "../Image";
import Button from "../Button";
import css from "./CamperCard.module.css";
import CamperPrice from "../CamperPrice";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";

export default function CamperCard({
  id,
  name,
  description,
  rating,
  location,
  price,
  reviewsCount,
  imgSrc,
  ...categories
}) {
  const handleNavigate = () => {
    window.open(`/catalog/${id}`, "_blank", "noopener,noreferrer");
  };

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

          <div className={css["action-bar"]}>
            <CamperPrice price={price} />
            <FavoriteBtn camperId={id} />
          </div>
        </div>

        <p className={css.desc}>{description}</p>

        <CategoriesList maxShow={5} {...categories} />

        <Button className={css.button} type="button" onClick={handleNavigate}>
          Show more
        </Button>
      </div>
    </div>
  );
}
