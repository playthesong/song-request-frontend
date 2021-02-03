import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLetterById } from "../modules/letter";
import LetterDetails from "../components/Letter/LetterDetails/LetterDetails";

const LetterDetailsContainer = ({ openedId, onCloseModal }) => {
  const { data: letter, loading, error } = useSelector(state => state.letter);
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [visible, setVisible] = useState(false);

  const changeToForm = () => {
    setIsForm(true);
    setOpenMenu(false);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const onVisible = () => {
    setVisible(true);
  };

  const onInvisible = () => {
    setVisible(false);
  };

  useEffect(() => {
    dispatch(getLetterById(openedId));
    setIsForm(false);
    setOpenMenu(false);
    setVisible(false);
  }, [openedId, dispatch, setIsForm, setOpenMenu, setVisible]);

  if (error) {
    return <div>ERROR!</div>;
  }

  if (!letter) {
    return null;
  }

  return (
    <LetterDetails
      letter={letter}
      isOpened={openedId}
      onCloseModal={onCloseModal}
      changeToForm={changeToForm}
      openMenu={openMenu}
      toggleMenu={toggleMenu}
      visible={visible}
      onVisible={onVisible}
      onInvisible={onInvisible}
    />
  );
};

export default LetterDetailsContainer;
