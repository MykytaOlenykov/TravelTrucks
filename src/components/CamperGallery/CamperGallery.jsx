import { useState } from "react";

import Image from "../Image";
import ImageModal from "../ImageModal";
import css from "./CamperGallery.module.css";

function GalleryItem({ camperName, thumbImg, originalImg }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        className={css.img}
        src={thumbImg}
        alt={camperName}
        onClick={() => setOpen(true)}
      />

      {open && (
        <ImageModal
          imgAlt={camperName}
          imgUrl={originalImg}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default function CamperGallery({ camperName, images }) {
  return (
    <ul className={css.list}>
      {images.map(({ thumb, original }, idx) => (
        <li key={idx}>
          <GalleryItem
            camperName={camperName}
            thumbImg={thumb}
            originalImg={original}
          />
        </li>
      ))}
    </ul>
  );
}
