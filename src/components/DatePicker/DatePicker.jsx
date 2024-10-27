import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Input from "../Input";
import css from "./DatePicker.module.css";

export default function DatePicker(props) {
  return (
    <ReactDatePicker
      wrapperClassName={css.wrapper}
      popperClassName={css.popper}
      calendarClassName={css.calendar}
      formatWeekDay={(date) => date.slice(0, 3)}
      customInput={<Input />}
      autoComplete="off"
      calendarStartDay={1}
      dateFormat={"dd.MM.yyyy"}
      {...props}
    />
  );
}
