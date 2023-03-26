import React from 'react';
import './Input.scss';

type Props = {
  name: string;
  label?: string;
  type?: 'text' | 'date';
  value: string;
  error?: string;
  onChange: (name: string, value: string) => void;
};

export default class Input extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    type: 'text',
  };

  changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, onChange } = this.props;
    onChange(name, evt.target.value);
  };

  render() {
    const { name, type, value, error, label } = this.props;
    return (
      <div className="input">
        <label>
          {label && <div>{label}</div>}
          <input
            className="input__element"
            name={name}
            type={type}
            value={value}
            onChange={this.changeHandler}
          />
        </label>
        {error && (
          <div className="input__error" data-testid="error">
            {error}
          </div>
        )}
      </div>
    );
  }
}
