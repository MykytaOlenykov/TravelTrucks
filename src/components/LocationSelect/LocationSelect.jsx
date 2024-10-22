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
  const selectedLocationFilter = useSelector(selectLocationFilter);

  const [locationFilter, setLocationFilter] = useState("");
  const [showLocationsList, setShowLocationsList] = useState(false);

  const locationsListRef = useRef();

  const handleChangeSearchLocation = (e) => {
    const { value } = e.target;
    setLocationFilter(value);
  };

  const handleSelectLocation = (location) => {
    dispatch(changeLocationFilter(location));
    setLocationFilter(location);
    setShowLocationsList(false);
  };

  const handleShowLocationsList = () => {
    setShowLocationsList(true);
    setLocationFilter(selectedLocationFilter);
  };

  const handleHideLocationsList = () => {
    setShowLocationsList(false);
    if (selectedLocationFilter) {
      setLocationFilter(selectedLocationFilter);
    } else {
      setLocationFilter("");
    }
  };

  const handleClearSelect = () => {
    dispatch(changeLocationFilter(""));
    setLocationFilter("");
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
      {!!selectedLocationFilter && (
        <MdClose
          className={classNames(css.icon, css["icon--right"])}
          onClick={handleClearSelect}
        />
      )}

      <Input
        className={css.input}
        style={{ paddingRight: selectedLocationFilter ? 46 : undefined }}
        value={locationFilter}
        type="text"
        placeholder="City"
        onChange={handleChangeSearchLocation}
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
