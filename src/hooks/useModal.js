import { useState } from "react";

const useModal = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onOpenModal = () => setIsOpened(true);
  const onCloseModal = () => setIsOpened(false);

  return [isOpened, onOpenModal, onCloseModal];
};

export default useModal;
