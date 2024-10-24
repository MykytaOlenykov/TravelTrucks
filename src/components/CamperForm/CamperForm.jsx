import Input from "../Input";
import Button from "../Button";
import css from "./CamperForm.module.css";

export default function CamperForm() {
  return (
    <form className={css.form} noValidate>
      <p className={css.title}>Book your campervan now</p>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <Input
        className={css.input}
        name="name"
        type="text"
        placeholder="Name*"
      />
      <Input
        className={css.input}
        name="email"
        type="text"
        placeholder="Email*"
      />
      <Input
        className={css.input}
        name="date"
        type="text"
        placeholder="Booking date*"
      />
      <Input
        className={css.comment}
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
