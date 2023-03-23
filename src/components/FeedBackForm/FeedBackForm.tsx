import React from 'react';
import Input from '../common/Input/Input';
import { validationRules, ValidationFunction } from '../../validationRules';

const { required, capital } = validationRules;

type IState = Record<
  string,
  {
    value: string;
    rules: ValidationFunction[];
    errors: string[];
  }
>;

export default class FeedBackForm extends React.Component<unknown, IState> {
  state = {
    name: {
      value: '',
      rules: [required, capital],
      errors: [],
    },

    date: {
      value: '',
      rules: [required],
      errors: [],
    },
  };

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    type FieldType = keyof typeof this.state;
    this.setState({
      [evt.target.name]: {
        ...this.state[evt.target.name as FieldType],
        value: evt.target.value,
      },
    });
  };

  handleSubmit = (evt: React.SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();

    type FieldType = keyof typeof this.state;
    let field: FieldType;
    for (field in this.state) {
      const filedObject = this.state[field];
      this.setState({ [field]: { ...this.state[field], errors: [] } });
      const newErrors: string[] = [];
      filedObject.rules.forEach((rule: ValidationFunction) => {
        const result = rule(filedObject.value);
        if (result.valid) return;
        newErrors.push(result.message);
      });

      this.setState({
        [field as FieldType]: {
          ...this.state[field as FieldType],
          errors: newErrors,
        },
      });
    }
  };

  render() {
    const { name, date } = this.state;
    return (
      <div>
        <p>form</p>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            value={name.value}
            error={name.errors[0]}
            onChange={this.handleChange}
          />
          <Input
            name="date"
            type="date"
            value={date.value}
            error={date.errors[0]}
            onChange={this.handleChange}
          />

          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
