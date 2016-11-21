import React, { Component } from 'react';
import  CommonHead from './commonHead';
import CommonFoot from './commonFoot';
import LoginInput from './loginInput';
import {hashHistory} from 'react-router'
class Login extends Component {
		constructor(props){
		     super(props);
		var  isLogin= sessionStorage.getItem('is_login')
		
		if(isLogin){
			  	hashHistory.push('/');
		}
		this.onTouchStart=this.onTouchStart.bind(this)
        this.touchMove=this.touchMove.bind(this)
        this.touchEnd=this.touchEnd.bind(this)
		}
		onTouchStart(e){
			 	 e.stopPropagation()
		}
		touchMove(e){
			e.stopPropagation()
		}
		touchEnd(e){
			e.stopPropagation()
		}
		
  render() {
    return (
    	<div onTouchStart={this.onTouchStart}      
      onTouchMove={this.touchMove}
      onTouchEnd={this.touchEnd}>
    	<CommonHead head={{title:"登录",headimg:""}}/>
    	<LoginInput actions={this.props.actions} login_date={this.props.login_date} />
    
    	</div> 
    );
  }
}
export default Login;
