import React from 'react';
import { Field, reduxForm } from 'redux-form';

class CreatePost extends React.Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          { ...field.input }
        />
        {field.meta.touched? field.meta.error : ''}
      </div>
    )
  }

  onSubmit(values) {
    // REMAINDER: Make sure to generate a userId between 1 - 10 and send it over with values
    const userId = Math.ceil(Math.random(10) * 10 )
    values = { ...values, userId}
    console.log(values);

    // TODO: Now you can make a post request to the sever with the saved values,
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Body"
          name="body"
          type="textarea"
          component={this.renderField}
        />
        <button className="btn btn-primary" type="submit">Create Post</button>
      </form>
    );
  }
}

// Validate function will be called automatically, we just need to specify rules for each input field
function validate(values) {
  const errors = {};
  if(!values.title || values.title.length < 3) {
    errors.title = "Please enter a title that is at least 3 characters";
  }
  if (!values.body) {
    errors.body = "Enter the body of your post"
  }
  // NOTE: if errors is empty, the form is fine to submit otherwise, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(CreatePost);
