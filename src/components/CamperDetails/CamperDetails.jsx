import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";

import { camperService } from "../../services";
import { getCamperCategories } from "../../utils";

import CamperHeader from "../CamperHeader";
import CamperPrice from "../CamperPrice";
import CamperGallery from "../CamperGallery";
import CamperFeatures from "../CamperFeatures";
import Loader from "../Loader";
import NotFound from "../NotFound";
import css from "./CamperDetails.module.css";

const routes = ["Features", "Reviews"];

export default function CamperDetails() {
  const { id } = useParams();

  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(0);
  const [subPage, setSubPage] = useState(routes[0]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setNotFound(false);

        const data = await camperService.getById(id);

        setCamper(data);
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (notFound) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NotFound />
      </div>
    );
  }

  if (!camper || loading) return <Loader />;

  return (
    <section className={css.section}>
      <h1 className="visually-hidden">{camper.name}</h1>

      <div style={{ marginBottom: 16 }}>
        <CamperHeader
          camperName={camper.name}
          camperLocation={camper.location}
          camperRating={camper.rating}
          camperReviewsCount={camper.reviews.length}
        />
      </div>

      <div style={{ marginBottom: 28 }}>
        <CamperPrice price={camper.price} />
      </div>

      <CamperGallery camperName={camper.name} images={camper.gallery} />

      <p className={css.text}>{camper.description}</p>

      <ul className={css.nav}>
        {routes.map((route) => (
          <li key={route}>
            <button
              className={classNames(css.link, {
                [css["link--current"]]: route === subPage,
              })}
              onClick={() => setSubPage(route)}
            >
              {route}
            </button>
          </li>
        ))}
      </ul>

      <div className={css.separator} />

      <div className={css.container}>
        <div className={css.info}>
          {subPage === "Features" && (
            <CamperFeatures
              form={camper.form}
              width={camper.width}
              height={camper.height}
              length={camper.length}
              tank={camper.tank}
              consumption={camper.consumption}
              {...getCamperCategories(camper)}
            />
          )}
          {subPage === "Reviews" && <></>}
        </div>
        <div className={css.form}></div>
      </div>
    </section>
  );
}
