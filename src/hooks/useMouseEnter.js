import { useState } from "react";

const useMouseEnter = () => {
  const [isMouseEnter, setMouseEnter] = useState(false);

  const onMouseEnter = () => {
    setMouseEnter(true);
  };

  const onMouseLeave = () => {
    setMouseEnter(false);
  };

  return [isMouseEnter, onMouseEnter, onMouseLeave];
};

export default useMouseEnter;
