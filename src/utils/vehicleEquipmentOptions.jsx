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
    key: "AC",
    type: "boolean",
    icon: (props) => <BsWind {...props} />,
  },
  {
    key: "automatic",
    type: "string",
    field: "transmission",
    icon: (props) => <BsDiagram3 {...props} />,
  },
  {
    key: "kitchen",
    type: "boolean",
    icon: (props) => <BsCupHot {...props} />,
  },
  {
    key: "TV",
    type: "boolean",
    icon: (props) => <BsDisplay {...props} />,
  },
  {
    key: "bathroom",
    type: "boolean",
    icon: (props) => <PiShower {...props} />,
  },
  {
    key: "petrol",
    type: "string",
    field: "engine",
    icon: (props) => <BsFuelPump {...props} />,
  },
  {
    key: "radio",
    type: "boolean",
    icon: (props) => <BsUiRadios {...props} />,
  },
  {
    key: "refrigerator",
    type: "boolean",
    icon: (props) => <TbFridge {...props} />,
  },
  {
    key: "microwave",
    type: "boolean",
    icon: (props) => <LuMicrowave {...props} />,
  },
  {
    key: "gas",
    type: "boolean",
    icon: (props) => <BsWind {...props} />,
  },
  {
    key: "water",
    type: "boolean",
    icon: (props) => <IoWaterOutline {...props} />,
  },
];
