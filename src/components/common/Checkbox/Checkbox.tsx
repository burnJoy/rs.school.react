import React from 'react';

type Props = {
  checked: boolean;
  value: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};

export default class Checkbox extends React.Component<Props> {
  render() {
    const { checked, value, onChange } = this.props;
    return (
      <div className="checkbox">
        <label>
          <input type="checkbox" value={value} checked={checked} onChange={onChange} />
          {value}
        </label>
      </div>
    );
  }
}
