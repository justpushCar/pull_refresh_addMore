import React from 'react';
import ReactDOM from 'react-dom';
import Taoke from './taoke';
import Login from './components/login';
import Game from './components/gameTouch';
import Loadermore from './components/loaderMore';
import './css/common.css';
import { Router, Route, hashHistory } from 'react-router';
import {b_rem} from './js/common_rem'
b_rem() //运行rem.js 布局核心js
ReactDOM.render((
	 <Router history={hashHistory}>
	    <Route path="/" component={Taoke}></Route>
	    <Route path="/login" component={Login}/>
	    <Route path="/game" component={Game}/>
	 </Router>
),
  document.getElementById('root')
);
