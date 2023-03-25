import React from 'react';
import type { FieldType } from '../../FeedBackForm/FeedBackForm';

import './Select.scss';

type Props = {
  name: FieldType;
  label?: string;
  options: Record<'name', string>[];
  error: string;
  placeholder: string;
  value: string;
  onChange: (name: FieldType, value: string) => void;
};

export default class Select extends React.Component<Props> {
  changeHandler = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, onChange } = this.props;
    onChange(name as FieldType, evt.target.value);
  };

  render() {
    const { name, options, error, placeholder, value, label } = this.props;

    return (
      <div className="select">
        <label>
          {label && <div>{label}</div>}
          <select
            className="select__element"
            name={name}
            value={value || placeholder}
            onChange={this.changeHandler}
          >
            <option disabled>{placeholder}</option>
            {options.map((option) => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </label>

        {error && <div className="input__error">{error}</div>}
      </div>
    );
  }
}
