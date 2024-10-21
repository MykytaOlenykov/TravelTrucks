import { BeatLoader } from "react-spinners";

export default function PageLoader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "24px 0",
      }}
    >
      <BeatLoader />
    </div>
  );
}
