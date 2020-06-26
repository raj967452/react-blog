import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { searchPost } from '../../services/store/posts/actions';

class SearchPosts extends Component {
    onSubmit(values) {
        console.log(values);
        this.props.searchPost(values.saerchPosts, () => {
            this.props.history.push('/')
        })
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props
        
        return (
            <div className="my-5">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-inline">
                    <div className="form-group mb-2">
                        <label htmlFor="saerchPosts" className="sr-only">Search: </label>
                        <Field label="saerchPosts" type="number" name="saerchPosts" component="input" placeholder="Enter User id to search" className="form-control" /> 
                    </div>
                    <button type="submit" disabled={pristine || submitting} className="btn btn-primary ml-3 mb-2">Submit</button>                    
                </form>
            </div>
        )
    }
}

export default reduxForm({    
    form: 'SearchPostsForm'
})(connect(null,{ searchPost })(SearchPosts));
