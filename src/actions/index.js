import myServer from '../apis/myServer';
import history from '../history';
import {
  FETCH_POSTS,
  CREATE_POST
} from './types';

export const fetchPosts = () => async dispatch => {
  const response = await myServer.get('/posts');

  dispatch({ type: FETCH_POSTS, payload: response.data });
}

export const createPost = (values, navigateBack) => async dispatch => {
  const response = await myServer.post('/posts', values);
  navigateBack();
  dispatch({ type: CREATE_POST, payload: response.data });
}
