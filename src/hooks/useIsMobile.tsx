import { useEffect, useState } from "react";

const width = 768;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= width);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= width);
    };
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
