import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../services/store/posts/actions';
import { Link } from 'react-router-dom';

import SearchPosts from './search-posts';

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts()
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <Link to={'posts/' + post.id} key={post.id}>
                    <li className="list-group-item">
                        <strong>{post.title}</strong>
                        <span className="post-category">{post.categories}</span>
                    </li>
                </Link>
            )
        })
    }

    render() {
        return (
            <div className="container my-5">

                <SearchPosts />
                <div className="d-flex justify-content-between my-3">
                    <Link to="/posts/new" className="btn btn-primary">Create post</Link>
                    <h3>All Posts</h3>                    
                </div>
                
                <ul className="list-group">{this.renderPosts()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(
    mapStateToProps,
    { fetchPosts }
)(Posts)
