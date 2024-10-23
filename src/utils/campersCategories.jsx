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

export const campersCategoriesIcons = {
  AC: (props) => <BsWind {...props} />,
  automatic: (props) => <BsDiagram3 {...props} />,
  kitchen: (props) => <BsCupHot {...props} />,
  TV: (props) => <BsDisplay {...props} />,
  bathroom: (props) => <PiShower {...props} />,
  petrol: (props) => <BsFuelPump {...props} />,
  radio: (props) => <BsUiRadios {...props} />,
  refrigerator: (props) => <TbFridge {...props} />,
  microwave: (props) => <LuMicrowave {...props} />,
  gas: (props) => <BsWind {...props} />,
  water: (props) => <IoWaterOutline {...props} />,
  panelTruck: (props) => <BsGrid1X2 {...props} />,
  fullyIntegrated: (props) => <BsGrid {...props} />,
  alcove: (props) => <BsGrid3X3Gap {...props} />,
};

export const campersCategoriesLabels = {
  AC: "AC",
  automatic: "Automatic",
  kitchen: "Kitchen",
  TV: "TV",
  bathroom: "Bathroom",
  petrol: "Petrol",
  radio: "Radio",
  refrigerator: "Refrigerator",
  microwave: "Microwave",
  gas: "Gas",
  water: "Water",
  panelTruck: "Van",
  fullyIntegrated: "Fully Integrated",
  alcove: "Alcove",
};

export const campersCategories = Object.keys(campersCategoriesIcons);

export function getCamperCategories(camper) {
  const categories = {};

  for (const [key, value] of Object.entries(camper)) {
    const valueType = typeof value;
    if (valueType !== "boolean" && valueType !== "string") continue;
    if (!value) continue;
    if (valueType === "boolean" && campersCategories.includes(key)) {
      categories[key] = true;
    } else if (campersCategories.includes(value)) {
      categories[value] = true;
    }
  }

  return categories;
}
