import React from 'react';
import ReactDOM from 'react-dom';
import Taoke from './taoke';
import Login from './components/login';
import Loadermore from './components/loaderMore';
import './css/common.css';
import { Router, Route, hashHistory } from 'react-router';
import {b_rem} from './js/common_rem'
b_rem() //运行rem.js 布局核心js
var one_rem=document.documentElement.clientWidth/16;

ReactDOM.render((
	 <Router history={hashHistory}>
	    <Route path="/" component={Taoke}></Route>
	    <Route path="/login" component={Login}/>
	    <Route path="/tloader" component={Loadermore}/>
	 </Router>
),
  document.getElementById('root')
);
