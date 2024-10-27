import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";

import {
  clearCampers,
  selectCampers,
  selectCampersErrorCode,
  selectCampersLoading,
  selectCampersSearchParams,
  selectCampersTotal,
} from "../../store/campersSlice";
import { fetchCampers } from "../../store/campersOperations";
import { getCamperCategories } from "../../utils";

import CamperCard from "../CamperCard";
import css from "./CampersList.module.css";

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const totalCampers = useSelector(selectCampersTotal);
  const loading = useSelector(selectCampersLoading);
  const errorCode = useSelector(selectCampersErrorCode);
  const campersSearchParams = useSelector(selectCampersSearchParams);

  const [page, setPage] = useState(1);
  const [scrollValue, setScrollValue] = useState(0);

  const containerRef = useRef(null);
  const listRef = useRef(null);

  const showLoadMoreBtn = !loading && campers.length < totalCampers;
  const renderFooter = showLoadMoreBtn || loading || !!errorCode;

  useEffect(() => {
    containerRef.current.scrollTo({
      top: scrollValue,
      behavior: "smooth",
    });
  }, [scrollValue, campers]);

  useEffect(() => {
    const controller = new AbortController();

    setScrollValue(0);
    dispatch(
      fetchCampers({
        params: { ...campersSearchParams, limit: 4, page: 1 },
        signal: controller.signal,
      })
    );
    setPage(2);

    return () => {
      dispatch(clearCampers());
      controller.abort();
    };
  }, [dispatch, campersSearchParams]);

  const loadNextPage = (page) => {
    const container = listRef.current;
    setScrollValue((container?.scrollHeight ?? 0) + 32);

    dispatch(
      fetchCampers({
        params: { ...campersSearchParams, limit: 4, page },
      })
    );
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (!!errorCode && errorCode !== 404) {
      toast.error("Something went wrong. Try again.");
    }
  }, [errorCode]);

  return (
    <div ref={containerRef} className={css.container}>
      <ul ref={listRef} className={css.list}>
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

      {renderFooter && (
        <div
          style={{ marginTop: totalCampers > 0 ? 40 : undefined }}
          className={css.footer}
        >
          {errorCode === 404 && <p className={css.text}>Not found</p>}
          {loading && <BeatLoader color="rgba(16, 24, 40, 1)" />}
          {showLoadMoreBtn && (
            <button
              className={css.button}
              type="button"
              onClick={() => loadNextPage(page)}
            >
              Load more
            </button>
          )}
        </div>
      )}
    </div>
  );
}
