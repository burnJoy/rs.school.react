import React from 'react';
import './Input.scss';

type Props = {
  name: string;
  type?: 'text' | 'date';
  value: string;
  error?: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};

export default class Input extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    type: 'text',
  };

  render() {
    const { name, type, value, error, onChange } = this.props;
    return (
      <div>
        <input name={name} type={type} value={value} onChange={onChange} />
        {error && <p className="input__error">{error}</p>}
      </div>
    );
  }
}
