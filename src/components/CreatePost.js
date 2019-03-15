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
        {field.meta.error}
      </div>
    )
  }

  render() {
    return (
      <form name="PostsNewForm">
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
