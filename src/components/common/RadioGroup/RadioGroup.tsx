import React from 'react';
import type { FieldType } from '../../FeedBackForm/FeedBackForm';

import './RadioGroup.scss';

type Props = {
  name: FieldType;
  label?: string;
  options: string[];
  error: string;
  onChange: (name: FieldType, value: string) => void;
};

export default class RadioGroup extends React.Component<Props> {
  changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, onChange } = this.props;
    onChange(name as FieldType, evt.target.value);
  };

  render() {
    const { name, options, error, label } = this.props;
    return (
      <div className="radio-group">
        {label && <div>{label}</div>}

        {options.map((option) => (
          <label key={option}>
            <input type="radio" name={name} value={option} onChange={this.changeHandler} />
            {option}
          </label>
        ))}
        {error && <div className="input__error">{error}</div>}
      </div>
    );
  }
}
