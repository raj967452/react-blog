import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { createPost } from '../../services/store/posts/actions';

class PostsCreate extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className={className} type="input" {...field.input} />
                <div className="invalid-feedback">{touched ? error : null}</div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/')
        })
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div className="container my-5">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <h3>Create post</h3>
                    <Field label="Title" name="title" component={this.renderField} />                    
                    <Field label="Content" name="content" component={this.renderField} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {}
    if (!values.title) {
        errors.title = 'Enter a title'
    }    
    if (!values.content) {
        errors.content = 'Enter some content'
    }
    return errors
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(connect(null,{ createPost })(PostsCreate));
