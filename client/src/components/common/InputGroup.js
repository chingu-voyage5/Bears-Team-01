import React from 'react';

const InputGroup = ({ name, placeholder, value, error, type, onChange }) => {
  return (
    <div className="form-group">
      <input
        className="form-control form-control-lg"
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

InputGroup.defaultProps = {
  type: 'text'
};

export default InputGroup;
