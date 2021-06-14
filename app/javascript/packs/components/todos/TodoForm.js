import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class TodoForm extends Component {
  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      )
    }
  }

  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues) // callback to parent component, create and edit
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form error" >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="complete" component={this.renderInput} label="Enter Complete" />
        <button>Submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}

  if (!formValues.title) {
    errors.title = "You must enter a title"
  }

  if (!formValues.complete) {
    errors.complete = "You must enter value for complete field"
  }

  return errors;
}

export default reduxForm({ form: 'todoForm', validate })(TodoForm)
