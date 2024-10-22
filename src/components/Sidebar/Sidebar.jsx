import { useDispatch, useSelector } from "react-redux";

import {
  changeVehicleEquipment,
  changeVehicleTypes,
  selectVehicleEquipments,
  selectVehicleTypes,
} from "../../store/filtersSlice";

import FiltersList from "../FiltersList";
import LocationSelect from "../LocationSelect";
import css from "./Sidebar.module.css";

export default function Sidebar() {
  const dispatch = useDispatch();
  const vehicleEquipments = useSelector(selectVehicleEquipments);
  const vehicleTypes = useSelector(selectVehicleTypes);

  const handleSelectVehicleEquipment = (options) => {
    dispatch(changeVehicleEquipment(options.field));
  };

  const handleSelectVehicleTypes = (options) => {
    dispatch(changeVehicleTypes(options.value));
  };

  return (
    <div>
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
    </div>
  );
}
