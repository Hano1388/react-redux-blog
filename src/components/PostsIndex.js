import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link className="header" to={`/posts/${post.id}`}>{post.title}</Link>
          <p>{post.body}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3 className="header">Posts</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
