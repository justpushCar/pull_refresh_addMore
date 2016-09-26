import React, { Component } from 'react';
import  CommonHead from './commonHead';
import CommonFoot from './commonFoot';
import LoginInput from './loginInput';
class Login extends Component {
  render() {
    return (
    	<div>
    	<CommonHead head={{title:"登录",headimg:""}}/>
    	<LoginInput/>
      <CommonFoot/>
    	</div> 
    );
  }
}
export default Login;
