import _ from 'lodash';
import {
  FETCH_POSTS,
  CREATE_POST,
  FETCH_POST
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload, 'id');
    case FETCH_POST:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}
