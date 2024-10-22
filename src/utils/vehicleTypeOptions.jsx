import { BsGrid1X2, BsGrid, BsGrid3X3Gap } from "react-icons/bs";

export const vehicleTypeOptions = [
  {
    value: "panelTruck",
    title: "van",
    type: "string",
    field: "form",
    icon: (props) => <BsGrid1X2 {...props} />,
  },
  {
    value: "fullyIntegrated",
    title: "fully integrated",
    type: "string",
    field: "form",
    icon: (props) => <BsGrid {...props} />,
  },
  {
    value: "alcove",
    title: "alcove",
    type: "string",
    field: "form",
    icon: (props) => <BsGrid3X3Gap {...props} />,
  },
];
