import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useImageColor = (image: string | undefined) => {
  const [color, setColor] = useState("");
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
  }, [image]);

  return color;
};

export default useImageColor;
