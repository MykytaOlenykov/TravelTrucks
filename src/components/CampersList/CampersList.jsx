import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { isAxiosError } from "axios";

import { selectCampersSearchParams } from "../../store/campersSlice";
import { getCamperCategories } from "../../utils";
import { camperService } from "../../services";

import CamperCard from "../CamperCard";
import css from "./CampersList.module.css";

export default function CampersList() {
  const campersSearchParams = useSelector(selectCampersSearchParams);

  const [campers, setCampers] = useState([]);
  const [totalCampers, setTotalCampers] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);

  const containerRef = useRef(null);
  const listRef = useRef(null);

  const showLoadMoreBtn = !loading && campers.length < totalCampers;

  useEffect(() => {
    containerRef.current.scrollTo({
      top: scrollValue,
      behavior: "smooth",
    });
  }, [scrollValue, campers]);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setCampers([]);
        setTotalCampers(0);
        setLoading(true);
        setNotFound(false);
        setScrollValue(0);

        const data = await camperService.getAll({
          params: { ...campersSearchParams, limit: 4, page: 1 },
          signal: controller.signal,
        });

        setPage(2);
        setCampers(data.items);
        setTotalCampers(data.total);
      } catch (error) {
        if (!(isAxiosError(error) && error.code === "ERR_CANCELED")) {
          setNotFound(true);
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [campersSearchParams]);

  const loadNextPage = async (page) => {
    try {
      const container = listRef.current;
      setScrollValue((container?.scrollHeight ?? 0) + 32);
      setPage((prev) => prev + 1);
      setLoading(true);

      const data = await camperService.getAll({
        params: { ...campersSearchParams, limit: 4, page },
      });

      setCampers((prev) => [...prev, ...data.items]);
      setTotalCampers(data.total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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

      <div
        style={{ marginTop: totalCampers > 0 ? 40 : undefined }}
        className={css.footer}
      >
        {notFound && <p className={css.text}>Not found</p>}
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
    </div>
  );
}
