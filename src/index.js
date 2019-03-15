import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import PostsIndex from './components/PostsIndex';
import CreatePost from './components/CreatePost';
import ShowPost from './components/ShowPost';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={PostsIndex} exact />
          <Route path="/posts/new" component={CreatePost} exact/>
          <Route path="/posts/:id" component={ShowPost} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
