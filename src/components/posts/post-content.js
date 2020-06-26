import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPost, deletePost } from '../../services/store/posts/actions';

class PostsContent extends Component {
    componentDidMount() {
        if (!this.props.post) {
            const { id } = this.props.match.params
            this.props.fetchPost(id)
        }
    }
    onDeleteClick() {
        const { id } = this.props.match.params
        this.props.deletePost(id, () => {
            this.props.history.push('/')
        })
    }

    render() {
        const { post } = this.props

        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div className="container  my-5">
                <div className="d-flex justify-content-between my-3">
                    <Link to="/">Back to List</Link>
                    <button
                        className="btn btn-danger pull-xs-right"
                        onClick={this.onDeleteClick.bind(this)}>
                        Delete Post
                    </button>
                </div>
                <h3>{post.title}</h3>               
                <p>{post.body}</p>
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] }
}

export default connect(
    mapStateToProps,
    { fetchPost, deletePost }
)(PostsContent)
