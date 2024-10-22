import React, { useRef, useState } from "react";
import classNames from "classnames";
import { BsMap } from "react-icons/bs";
import { MdClose } from "react-icons/md";

import { useOutsideClick } from "../hooks";
import { campersLocations } from "../../utils";

import Input from "../Input";
import css from "./LocationSelect.module.css";

export default function LocationSelect() {
  const [locationFilter, setLocationFilter] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showLocationsList, setShowLocationsList] = useState(false);

  const locationsListRef = useRef();

  const handleChangeSearchLocation = (e) => {
    const { value } = e.target;
    setLocationFilter(value);
  };

  const handleSelectLocation = (location) => {
    setLocationFilter(location);
    setSelectedLocation(location);
    setShowLocationsList(false);
  };

  const handleShowLocationsList = () => {
    setShowLocationsList(true);
    setLocationFilter(selectedLocation);
  };

  const handleHideLocationsList = () => {
    setShowLocationsList(false);
    if (selectedLocation) {
      setLocationFilter(selectedLocation);
    } else {
      setLocationFilter("");
    }
  };

  const handleClearSelect = () => {
    setSelectedLocation("");
    setLocationFilter("");
  };

  useOutsideClick(locationsListRef, handleHideLocationsList);

  const visibledLocations = campersLocations.filter((location) =>
    location.trim().toLowerCase().includes(locationFilter.trim().toLowerCase())
  );

  return (
    <>
      <p className={css.label}>Location</p>
      <div className={css.container}>
        <BsMap
          className={classNames(css.icon, css["icon--left"], {
            [css["icon--active"]]: !!locationFilter.trim(),
          })}
        />
        {!!selectedLocation && (
          <MdClose
            className={classNames(css.icon, css["icon--right"])}
            onClick={handleClearSelect}
          />
        )}

        <Input
          className={css.input}
          style={{ paddingRight: selectedLocation ? 46 : undefined }}
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
    </>
  );
}
