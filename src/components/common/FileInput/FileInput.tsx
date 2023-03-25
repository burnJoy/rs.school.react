import React from 'react';
import type { FieldType } from '../../FeedBackForm/FeedBackForm';

type Props = {
  name: FieldType;
  label?: string;
  error: string;
  accept?: string;
  onChange: (name: FieldType, value: string) => void;
};

export default class FileInput extends React.Component<Props> {
  changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, onChange } = this.props;
    const file = evt.target.files?.[0];
    if (!file) return;
    onChange(name as FieldType, file.name);
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
