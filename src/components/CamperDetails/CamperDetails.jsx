import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { camperService } from "../../services";

import Loader from "../Loader";
import css from "./CamperDetails.module.css";

export default function CamperDetails() {
  const { id } = useParams();

  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(0);

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

  if (notFound) return null;

  if (!camper || loading) return <Loader />;

  return <section className={css.section}></section>;
}
