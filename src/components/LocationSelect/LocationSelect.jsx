import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { BsMap } from "react-icons/bs";
import { MdClose } from "react-icons/md";

import { useOutsideClick } from "../../hooks";
import { campersLocations } from "../../utils";
import {
  changeLocationFilter,
  selectLocationFilter,
} from "../../store/filtersSlice";

import Input from "../Input";
import css from "./LocationSelect.module.css";

export default function LocationSelect() {
  const dispatch = useDispatch();
  const locationFilter = useSelector(selectLocationFilter);

  const [showLocationsList, setShowLocationsList] = useState(false);

  const locationsListRef = useRef();

  const handleChangeLocation = (e) => {
    const { value } = e.target;
    dispatch(changeLocationFilter(value));
  };

  const handleSelectLocation = (location) => {
    dispatch(changeLocationFilter(location));
    setShowLocationsList(false);
  };

  const handleShowLocationsList = () => {
    setShowLocationsList(true);
  };

  const handleHideLocationsList = () => {
    setShowLocationsList(false);
  };

  const handleClearSelect = () => {
    dispatch(changeLocationFilter(""));
  };

  useOutsideClick(locationsListRef, handleHideLocationsList);

  const visibledLocations = campersLocations.filter((location) =>
    location.trim().toLowerCase().includes(locationFilter.trim().toLowerCase())
  );

  return (
    <div className={css.container}>
      <BsMap
        className={classNames(css.icon, css["icon--left"], {
          [css["icon--active"]]: !!locationFilter.trim(),
        })}
      />
      {!!locationFilter && (
        <MdClose
          className={classNames(css.icon, css["icon--right"])}
          onClick={handleClearSelect}
        />
      )}

      <Input
        className={css.input}
        style={{ paddingRight: locationFilter ? 46 : undefined }}
        value={locationFilter}
        type="text"
        placeholder="City"
        onChange={handleChangeLocation}
        onClick={handleShowLocationsList}
      />

      {showLocationsList && (
        <div className={css.list} ref={locationsListRef}>
          {visibledLocations.map((location, idx) => (
            <React.Fragment key={location}>
              <div
                className={css.item}
                onClick={() => handleSelectLocation(location)}
              >
                {location}
              </div>
              {visibledLocations.length - 1 > idx && (
                <div className={css.separator} />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
