import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm);

  const onChange = event => {
    form[event.target.name] = event.target.value;
    console.log(form);
  };

  const onClear = () => {
    setForm(initialForm);
  };

  return [form, onChange, onClear];
};

export default useForm;
