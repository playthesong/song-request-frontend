import { useState } from "react";

const useModal = () => {
  const [activated, setActivated] = useState(null);

  const onActivate = activator => setActivated(activator);
  const onCancel = () => setActivated(null);

  return [activated, onActivate, onCancel];
};

export default useModal;
