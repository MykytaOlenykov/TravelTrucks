import React, { useRef, useState } from "react";
import { BsMap } from "react-icons/bs";
import { MdClose } from "react-icons/md";

import { useOutsideClick } from "../hooks";
import { campersLocations } from "../../utils";

import Input from "../Input";
import css from "./LocationSelect.module.css";

export default function LocationSelect() {
  const [filterLocation, setFilterLocation] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showLocationsList, setShowLocationsList] = useState(false);

  const locationsListRef = useRef();

  const handleChangeSearchLocation = (e) => {
    const { value } = e.target;
    setFilterLocation(value);
  };

  const handleSelectLocation = (location) => {
    setFilterLocation(location);
    setSelectedLocation(location);
    setShowLocationsList(false);
  };

  const handleShowLocationsList = () => {
    setShowLocationsList(true);
    setFilterLocation(selectedLocation);
  };

  const handleHideLocationsList = () => {
    setShowLocationsList(false);
    if (selectedLocation) {
      setFilterLocation(selectedLocation);
    } else {
      setFilterLocation("");
    }
  };

  const handleClearSelect = () => {
    setSelectedLocation("");
    setFilterLocation("");
  };

  useOutsideClick(locationsListRef, handleHideLocationsList);

  const visibledLocations = campersLocations.filter((location) =>
    location.trim().toLowerCase().includes(filterLocation.trim().toLowerCase())
  );

  return (
    <>
      <p className={css.label}>Location</p>
      <div className={css.container}>
        <BsMap className={`${css.icon} ${css["icon--left"]}`} />
        {!!selectedLocation && (
          <MdClose
            className={`${css.icon} ${css["icon--right"]}`}
            onClick={handleClearSelect}
          />
        )}

        <Input
          className={css.input}
          style={{ paddingRight: selectedLocation ? 46 : undefined }}
          value={filterLocation}
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
