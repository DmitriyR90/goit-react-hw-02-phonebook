import { Formik, Field, Form } from 'formik';
import { customAlphabet } from 'nanoid';
import { Component } from 'react';
const nanoid = customAlphabet('1234567890AB', 7);

export class CreateContact extends Component {
  handleSubmit = (values, actions) => {
    const id = nanoid();
    values.id = id;
    console.log(values);
    this.props.onSubmit(values);
    actions.resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off">
          <label>
            Name
            <Field id="name" name="name" type="text"></Field>
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
