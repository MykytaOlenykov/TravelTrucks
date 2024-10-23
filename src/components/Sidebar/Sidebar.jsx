import { useDispatch, useSelector } from "react-redux";

import {
  changeVehicleEquipment,
  changeVehicleTypes,
  selectLocationFilter,
  selectVehicleEquipments,
  selectVehicleTypes,
} from "../../store/filtersSlice";
import { changeSearchParams } from "../../store/campersSlice";
import { formatCampersSearchParams } from "../../utils";

import FiltersList from "../FiltersList";
import LocationSelect from "../LocationSelect";
import Button from "../Button";
import css from "./Sidebar.module.css";

export default function Sidebar() {
  const dispatch = useDispatch();
  const locationFilter = useSelector(selectLocationFilter);
  const vehicleEquipments = useSelector(selectVehicleEquipments);
  const vehicleTypes = useSelector(selectVehicleTypes);

  const handleSelectVehicleEquipment = (options) => {
    dispatch(changeVehicleEquipment(options.field));
  };

  const handleSelectVehicleTypes = (options) => {
    dispatch(changeVehicleTypes(options.value));
  };

  const handleSearchCampers = async () => {
    const searchParams = formatCampersSearchParams({
      vehicleEquipments,
      vehicleTypes,
      location: locationFilter,
    });
    dispatch(changeSearchParams(searchParams));
  };

  return (
    <div className={css.sidebar}>
      <p className={css.label} style={{ marginBottom: 8 }}>
        Location
      </p>
      <LocationSelect />

      <div className={css.container}>
        <p className={css.label}>Filters</p>

        <FiltersList
          title="Vehicle equipment"
          options={vehicleEquipments}
          onSelectFilter={handleSelectVehicleEquipment}
        />

        <FiltersList
          title="Vehicle type"
          options={vehicleTypes}
          onSelectFilter={handleSelectVehicleTypes}
        />
      </div>

      <Button
        className={css.button}
        type="button"
        onClick={handleSearchCampers}
      >
        Search
      </Button>
    </div>
  );
}
