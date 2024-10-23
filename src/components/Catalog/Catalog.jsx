import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCampers } from "../../store/campersOperations";
import {
  selectCampers,
  selectCampersSearchParams,
} from "../../store/campersSlice";

import CampersList from "../CampersList";
import Sidebar from "../Sidebar";
import css from "./Catalog.module.css";

export default function Catalog() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const campersSearchParams = useSelector(selectCampersSearchParams);

  useEffect(() => {
    dispatch(fetchCampers({ params: campersSearchParams }));
  }, [dispatch, campersSearchParams]);

  return (
    <section className={css.container}>
      <h1 className="visually-hidden">Catalog</h1>
      <div className={css.sidebar}>
        <Sidebar />
      </div>
      <div className={css.content}>
        <CampersList campers={campers} />
      </div>
    </section>
  );
}
