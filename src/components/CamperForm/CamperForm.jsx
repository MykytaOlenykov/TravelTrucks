import { useState } from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "../Input";
import Button from "../Button";
import DatePicker from "../DatePicker";
import css from "./CamperForm.module.css";

const validationSchema = yup.object({
  name: yup.string().trim().required("Name is required."),
  email: yup
    .string()
    .email("Email must be a valid.")
    .trim()
    .required("Email is required."),
  date: yup.date().nullable().required("Date is required."),
  comment: yup.string().trim(),
});

export default function CamperForm() {
  const [validateOnChange, setValidateOnChange] = useState(false);

  const {
    values,
    errors,
    handleChange,
    setFieldValue,
    handleSubmit,
    validateField,
    resetForm,
  } = useFormik({
    initialValues: { name: "", email: "", date: null, comment: "" },
    validationSchema,
    onSubmit,
    validateOnChange,
  });

  function onSubmit(values) {
    try {
      console.log(values);
      setValidateOnChange(false);
      resetForm();
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    }
  }

  return (
    <form
      className={css.form}
      noValidate
      onSubmit={(e) => {
        setValidateOnChange(true);
        handleSubmit(e);
      }}
    >
      <p className={css.title}>Book your campervan now</p>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <div className={css.container}>
        <Input
          value={values.name}
          onChange={handleChange("name")}
          onBlur={() => validateField("name")}
          name="name"
          type="text"
          placeholder="Name*"
        />
        {errors.name && <p className={css.error}>{errors.name}</p>}
      </div>

      <div className={css.container}>
        <Input
          value={values.email}
          onChange={handleChange("email")}
          onBlur={() => validateField("email")}
          name="email"
          type="text"
          placeholder="Email*"
        />
        {errors.email && <p className={css.error}>{errors.email}</p>}
      </div>

      <div className={css.container}>
        <DatePicker
          selected={values.date}
          onChange={(date) => setFieldValue("date", date)}
          onBlur={() => validateField("date")}
          name="date"
          placeholderText="Booking date*"
        />
        {errors.date && <p className={css.error}>{errors.date}</p>}
      </div>

      <Input
        className={css.comment}
        value={values.comment}
        onChange={handleChange("comment")}
        element="textarea"
        name="comment"
        type="text"
        placeholder="Comment"
      />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button style={{ minWidth: 166 }} type="submit">
          Send
        </Button>
      </div>
    </form>
  );
}
