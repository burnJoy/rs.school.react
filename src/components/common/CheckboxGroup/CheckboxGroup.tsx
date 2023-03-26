import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

type Props = {
  label: string;
  name: string;
  value: string[];
  error: string;
  options: string[];
  onChange: (name: string, value: string[]) => void;
};

export default class CheckboxGroup extends React.Component<Props> {
  onChange = (option: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, onChange } = this.props;
    const index = value.indexOf(option.target.value);
    if (index === -1) {
      onChange(name, [...value, option.target.value]);
    } else {
      onChange(name, [...value.filter((v, idx) => idx !== index)]);
    }
  };

  render() {
    const { value, label, error, options } = this.props;

    return (
      <div>
        <div>{label}</div>
        {options.map((option) => (
          <Checkbox
            key={option}
            value={option}
            onChange={this.onChange}
            checked={value.includes(option)}
          />
        ))}

        {error && <div className="input__error">{error}</div>}
      </div>
    );
  }
}
