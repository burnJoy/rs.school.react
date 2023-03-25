import React from 'react';
import Input from '../common/Input/Input';
import Select from '../common/Select/Select';
import CheckboxGroup from '../common/CheckboxGroup/CheckboxGroup';
import RadioGroup from '../common/RadioGroup/RadioGroup';
import FileInput from '../common/FileInput/FileInput';
import { validationRules, ValidationFunction } from '../../validationRules';
import { countries } from './countries';
import type { CardType } from '../../routes/Feedback/Feedback';

import './FeedBackForm.scss';

const { required, capital } = validationRules;

const defaultState = {
  addedState: false,
  fields: {
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
    country: {
      value: '',
      rules: [required],
      errors: [],
    },
    condition: {
      value: [] as string[],
      rules: [required],
      errors: [],
    },
    male: {
      value: '',
      rules: [required],
      errors: [],
    },
    avatar: {
      value: '',
      rules: [required],
      errors: [],
    },
  },
};

export type FieldType = keyof typeof defaultState.fields;

type Props = {
  addCard: (card: CardType) => void;
};

export default class FeedBackForm extends React.Component<Props> {
  state = defaultState;
  formRef = React.createRef<HTMLFormElement>();

  handleChange = (name: FieldType, value: string | string[]) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: {
          ...this.state.fields[name],
          value: value,
        },
      },
    });
  };

  async validateForm() {
    let valid = true;
    const { fields } = this.state;
    let field: FieldType;
    for (field in this.state.fields) {
      const filedObject = fields[field];
      await this.setState({
        fields: { ...this.state.fields, [field]: { ...fields[field], errors: [] } },
      });
      const newErrors: string[] = [];
      filedObject.rules.forEach((rule: ValidationFunction) => {
        const result = rule(filedObject.value);
        if (result.valid) return;
        newErrors.push(result.message);
        if (valid) valid = false;
      });

      await this.setState({
        fields: {
          ...this.state.fields,
          [field as FieldType]: {
            ...fields[field as FieldType],
            errors: newErrors,
          },
        },
      });
    }
    return valid;
  }

  handleSubmit = async (evt: React.SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!(await this.validateForm())) return;

    const formData = Object.entries(this.state.fields).reduce((acc, [field, value]) => {
      acc[field as FieldType] = value.value;
      return acc;
    }, {} as CardType);

    this.props.addCard(formData);

    this.setState(defaultState);
    if (this.formRef.current) {
      this.formRef.current.reset();
    }
    this.setSuccessMessage();
  };

  setSuccessMessage = () => {
    this.setState({ addedState: true });

    setTimeout(() => {
      this.setState({ addedState: false });
    }, 5000);
  };

  render() {
    const { addedState } = this.state;
    const { name, date, country, condition, avatar, male } = this.state.fields;

    return (
      <div>
        <p>form</p>
        {addedState && <div className="feed-form__success">Card is successfully added !!!</div>}
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <div className="feed-form__element">
            <Input
              name="name"
              label="Name"
              value={name.value}
              error={name.errors[0]}
              onChange={this.handleChange}
            />
          </div>
          <div className="feed-form__element">
            <Input
              label="Birthday"
              name="date"
              type="date"
              value={date.value}
              error={date.errors[0]}
              onChange={this.handleChange}
            />
          </div>
          <div className="feed-form__element">
            <Select
              name="country"
              label="Country"
              value={country.value}
              placeholder="Choose country"
              options={countries}
              onChange={this.handleChange}
              error={country.errors[0]}
            />
          </div>

          <div className="feed-form__element">
            <CheckboxGroup
              label="Choose conditions"
              name="condition"
              options={['condition1', 'condition2', 'condition3']}
              value={condition.value}
              error={condition.errors[0]}
              onChange={this.handleChange}
            />
          </div>

          <div className="feed-form__element">
            <RadioGroup
              label="Gender"
              name="male"
              options={['male', 'female']}
              onChange={this.handleChange}
              error={male.errors[0]}
            />
          </div>

          <div className="feed-form__element">
            <FileInput
              name="avatar"
              label="Load your Avatar"
              onChange={this.handleChange}
              error={avatar.errors[0]}
              accept="image/png, image/jpeg"
            />
          </div>

          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
