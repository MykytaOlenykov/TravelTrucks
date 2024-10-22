import {
  BsWind,
  BsDiagram3,
  BsCupHot,
  BsFuelPump,
  BsUiRadios,
  BsDisplay,
  BsGrid1X2,
  BsGrid,
  BsGrid3X3Gap,
} from "react-icons/bs";
import { PiShower } from "react-icons/pi";
import { TbFridge } from "react-icons/tb";
import { LuMicrowave } from "react-icons/lu";
import { IoWaterOutline } from "react-icons/io5";

import css from "./FiltersList.module.css";
import classNames from "classnames";

const icons = {
  AC: (props) => <BsWind {...props} />,
  transmission: (props) => <BsDiagram3 {...props} />,
  kitchen: (props) => <BsCupHot {...props} />,
  TV: (props) => <BsDisplay {...props} />,
  bathroom: (props) => <PiShower {...props} />,
  engine: (props) => <BsFuelPump {...props} />,
  radio: (props) => <BsUiRadios {...props} />,
  refrigerator: (props) => <TbFridge {...props} />,
  microwave: (props) => <LuMicrowave {...props} />,
  gas: (props) => <BsWind {...props} />,
  water: (props) => <IoWaterOutline {...props} />,
  panelTruck: (props) => <BsGrid1X2 {...props} />,
  fullyIntegrated: (props) => <BsGrid {...props} />,
  alcove: (props) => <BsGrid3X3Gap {...props} />,
};

export default function FiltersList({ title, options, onSelectFilter }) {
  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      <div className={css.separator} />

      <ul className={css.list}>
        {options.map(({ value, title, field, selected, icon }) => {
          const Icon = icons[icon];

          return (
            <li
              key={`${field}=${value ?? ""}`}
              className={classNames(css.item, {
                [css["item--selected"]]: selected,
              })}
              onClick={() => onSelectFilter({ field, value })}
            >
              <Icon className={css.icon} />
              <p className={css.text}>{title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
