import React from 'react';

import './RadioGroup.scss';

type Props = {
  name: string;
  label?: string;
  options: string[];
  error: string;
  onChange: (name: string, value: string) => void;
};

export default class RadioGroup extends React.Component<Props> {
  changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, onChange } = this.props;
    onChange(name, evt.target.value);
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
