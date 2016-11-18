import React from 'react';
import ReactDOM from 'react-dom';
import Taoke from './taoke';
import Login from './components/login';
import Game from './components/gameTouch';
import Loadermore from './components/loaderMore';
import './css/common.css';
import { Router, Route, hashHistory,IndexRoute} from 'react-router';
import { createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducer'
import {b_rem} from './js/common_rem'
b_rem() //运行rem.js 布局js
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

ReactDOM.render((
	  <Provider store={store}>
		 <Router history={hashHistory}>
		    <Route path="/" component={Taoke}>
		        <IndexRoute  component={Loadermore}/>
			      <Route path="login" component={Login}/>
		    </Route>
		    <Route path="/game" component={Game}/>
		    
		 </Router>
	  </Provider>
),
  document.getElementById('root')
);
