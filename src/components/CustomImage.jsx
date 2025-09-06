import { useEffect } from "react";
import mediumZoom from "medium-zoom";

export default function CustomImage({ image }) {
  useEffect(() => {
    mediumZoom(".zoom-img", {
      margin: 24, // spacing around the zoomed image
      background: "#000", // overlay background
      scrollOffset: 0, // how far you scroll before closing
      scale: 1, // 👈 controls zoom size (default is 1)
    });
  }, []);

  return <img src={image} alt="Zoom" className="zoom-img" />;
}
