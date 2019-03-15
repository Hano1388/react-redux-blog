import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class ShowPost extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id)
  }
  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div className="ui container">
        <Link className="btn btn-primary" to="/">back</Link>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchPost }
)(ShowPost);
