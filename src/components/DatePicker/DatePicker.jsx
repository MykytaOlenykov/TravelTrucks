import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Input from "../Input";
import css from "./DatePicker.module.css";

export default function DatePicker(props) {
  const [date, setDate] = useState(null);

  return (
    <ReactDatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      wrapperClassName={css.wrapper}
      popperClassName={css.popper}
      calendarClassName={css.calendar}
      formatWeekDay={(date) => date.slice(0, 3)}
      customInput={<Input />}
      autoComplete="off"
      calendarStartDay={1}
      {...props}
    />
  );
}
