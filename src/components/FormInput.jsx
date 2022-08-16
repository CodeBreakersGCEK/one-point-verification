import React, { useState } from 'react';

const FormInput = ({ lable, errorMessage, onChange, id, ...inputProps }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="">
      <label>{lable}</label>
      <input
        {...inputProps}
        onBlur={handleFocus}
        onChange={onChange}
        focused={focused.toString}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
