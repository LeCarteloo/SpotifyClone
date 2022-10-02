import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useImageColor = (image: string | undefined) => {
  const [color, setColor] = useState("");
  const location = useLocation();
  const fac = new FastAverageColor();

  useEffect(() => {
    if (image) {
      fac
        .getColorAsync(image)
        .then((color) => {
          setColor(color.hex);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [location.pathname]);

  return color;
};

export default useImageColor;
