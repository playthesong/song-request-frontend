import { useState } from "react";

const useToggle = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isForm, setIsForm] = useState(false);

  const changeToForm = () => {
    setIsForm(true);
    setOpenMenu(false);
  };

  const changeToRead = () => {
    setIsForm(false);
    setOpenMenu(false);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return { isForm, changeToForm, changeToRead, openMenu, toggleMenu };
};

export default useToggle;
