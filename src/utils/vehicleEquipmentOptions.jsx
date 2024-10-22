import {
  BsWind,
  BsDiagram3,
  BsCupHot,
  BsFuelPump,
  BsUiRadios,
  BsDisplay,
} from "react-icons/bs";
import { PiShower } from "react-icons/pi";
import { TbFridge } from "react-icons/tb";
import { LuMicrowave } from "react-icons/lu";
import { IoWaterOutline } from "react-icons/io5";

export const vehicleEquipmentOptions = [
  {
    value: "AC",
    title: "AC",
    type: "boolean",
    icon: (props) => <BsWind {...props} />,
  },
  {
    value: "automatic",
    title: "automatic",
    type: "string",
    field: "transmission",
    icon: (props) => <BsDiagram3 {...props} />,
  },
  {
    value: "kitchen",
    title: "kitchen",
    type: "boolean",
    icon: (props) => <BsCupHot {...props} />,
  },
  {
    value: "TV",
    title: "TV",
    type: "boolean",
    icon: (props) => <BsDisplay {...props} />,
  },
  {
    value: "bathroom",
    title: "bathroom",
    type: "boolean",
    icon: (props) => <PiShower {...props} />,
  },
  {
    value: "petrol",
    title: "petrol",
    type: "string",
    field: "engine",
    icon: (props) => <BsFuelPump {...props} />,
  },
  {
    value: "radio",
    title: "radio",
    type: "boolean",
    icon: (props) => <BsUiRadios {...props} />,
  },
  {
    value: "refrigerator",
    title: "refrigerator",
    type: "boolean",
    icon: (props) => <TbFridge {...props} />,
  },
  {
    value: "microwave",
    title: "microwave",
    type: "boolean",
    icon: (props) => <LuMicrowave {...props} />,
  },
  {
    value: "gas",
    title: "gas",
    type: "boolean",
    icon: (props) => <BsWind {...props} />,
  },
  {
    value: "water",
    title: "water",
    type: "boolean",
    icon: (props) => <IoWaterOutline {...props} />,
  },
];
