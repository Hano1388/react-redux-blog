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

export default reduxForm({
  form: 'PostNewForm'
})(CreatePost);
