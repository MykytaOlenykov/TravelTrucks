import { useDispatch, useSelector } from "react-redux";
import { RiHeartLine } from "react-icons/ri";
import classNames from "classnames";

import {
  selectFavoriteCampers,
  toggleCamperFavorite,
} from "../../store/campersSlice";

import css from "./FavoriteBtn.module.css";

export default function FavoriteBtn({ camperId }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoriteCampers);

  const toggleFavorite = () => dispatch(toggleCamperFavorite(camperId));

  return (
    <button
      style={{ cursor: "pointer" }}
      className="reset-button"
      type="button"
      onClick={toggleFavorite}
    >
      <RiHeartLine
        className={classNames(css.icon, {
          [css["icon--active"]]: favorites.includes(camperId),
        })}
      />
    </button>
  );
}
