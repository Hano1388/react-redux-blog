import myServer from '../apis/myServer';
import {
  FETCH_POSTS,
  CREATE_POST,
  FETCH_POST,
  DELETE_POST
} from './types';

export const fetchPosts = () => async dispatch => {
  const response = await myServer.get('/posts');

  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const createPost = (values, navigateBack) => async dispatch => {
  const response = await myServer.post('/posts', values);
  navigateBack();
  dispatch({ type: CREATE_POST, payload: response.data });
};

export const fetchPost = id => async dispatch => {
  const response = await myServer.get(`/posts/${id}`);

  dispatch({ type: FETCH_POST, payload: response.data });
};

export const deletePost = (id, navigateBack) => async dispatch => {
  await myServer.delete(`/posts/${id}`);
  dispatch({ type: DELETE_POST, payload: id });
  navigateBack();
};
