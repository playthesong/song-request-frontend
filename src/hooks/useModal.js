import { useState } from "react";

const useModal = () => {
  const [openedId, setOpenedId] = useState(null);

  const onOpenModal = target => setOpenedId(target);
  const onCloseModal = () => setOpenedId(null);

  return [openedId, onOpenModal, onCloseModal];
};

export default useModal;
