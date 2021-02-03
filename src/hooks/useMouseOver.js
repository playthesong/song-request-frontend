import { useState } from "react";

const useMouseEnter = () => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const onMouseEnter = () => {
    setMouseEnter(true);
  };

  const onMouseLeave = () => {
    setMouseEnter(false);
  };

  return [mouseEnter, onMouseEnter, onMouseLeave];
};

export default useMouseEnter;
