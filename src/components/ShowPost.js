import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class ShowPost extends Component {
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    // console.log(id);
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div > Loading... < /div>
    }
    return (
      <div className = "ui container ">
        <Link className = "btn btn-primary" to = "/"> back < /Link>
        <button
          className="btn btn-danger pull-xs-right"
          type="button"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete
        </button>
        <h3> { post.title } </h3>
        <p> {post.body } </p>
      </div >
    );
  }
}

  const mapStateToProps = ({
    posts
  }, ownProps) => {
    return {
      post: posts[ownProps.match.params.id]
    };
  }

  export default connect(
    mapStateToProps, {
      fetchPost,
      deletePost
    }
  )(ShowPost);
