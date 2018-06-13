import React from 'react';
import classnames from 'classnames';

const InputGroup = ({ name, placeholder, value, errors, type, onChange }) => {
  return (
    <div className="form-group">
      <input
        className={classnames('form-control form-control-lg', {
          'is-invalid': errors
        })}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};

InputGroup.defaultProps = {
  type: 'text'
};

export default InputGroup;
