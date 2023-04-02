import React from 'react';

type Props = {
  name: string;
  label?: string;
  error: string;
  accept?: string;
  onChange: (name: string, value: string) => void;
};

export default class FileInput extends React.Component<Props> {
  changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, onChange } = this.props;
    const file = evt.target.files?.[0];
    if (!file) return;
    onChange(name, file.name);
  };

  render() {
    const { accept, error, label } = this.props;
    return (
      <div>
        {label && <div>{label}</div>}
        <label>
          <input type="file" accept={accept} onChange={this.changeHandler} />
          {error && <div className="input__error">{error}</div>}
        </label>
      </div>
    );
  }
}
