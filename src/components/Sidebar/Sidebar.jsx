import { vehicleEquipmentOptions, vehicleTypeOptions } from "../../utils";

import FiltersList from "../FiltersList";
import LocationSelect from "../LocationSelect";
import css from "./Sidebar.module.css";

export default function Sidebar() {
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
          options={vehicleEquipmentOptions}
        />

        <FiltersList title="Vehicle type" options={vehicleTypeOptions} />
      </div>
    </div>
  );
}
