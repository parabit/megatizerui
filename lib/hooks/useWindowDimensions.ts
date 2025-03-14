import { useEffect, useState } from "react";

const getDimensions = () => {
  const { innerWidth: w, innerHeight: h } = window;
  const size = w < 576 ? "sm" : w < 768 ? "md" : w < 992 ? "lg" : "xl";

  return {
    width: w,
    height: h,
    size,
    isMobile: size === "sm",
  };
};

export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState(getDimensions());

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => setDimensions(getDimensions());

  return dimensions;
};
