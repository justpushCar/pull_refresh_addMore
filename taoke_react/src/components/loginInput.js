import React, { Component } from 'react';
import { Link, hashHistory} from 'react-router';
class LoginInput extends Component {
	  	constructor(props){
		     super(props);
		     if(this.props.login_date.is_login){
		     	hashHistory.push('/');
		     }
		       
		}
	
	 	loginHand(){
  		var va1= this.refs.input1.value
  		var va2= this.refs.input2.value
  		if(va1===""&&va2===""){
  			alert("账号密码不能为空")
  		}else{
			 this.props.actions.dologin({ body: 'phone='+va1+'&password='+va2})
  		} 
  		//http://sanguojiamen.applinzi.com/index.php/Index/register.html
  		
  	}
  render() {
  
      let {is_login,date}=this.props.login_date
      if(is_login){
     	hashHistory.push('/');
     	return false
      }else{
      	if(date.status==0){
      		alert(date.info)
      	}
      	if(date.status==2){
      		alert(date.info)
      	}
      }
        
	    return (
	    	
	     <div className="login">
		      <div className="con_input">
		        <i className="fa fa-user-secret" aria-hidden="true"></i><label>账号</label>
			      <input className="input1" ref="input1" type="text"/>
			    </div> 
			    <div className="con_input">
			     <i className="fa fa-lock" aria-hidden="true"></i>
			     <label >密码</label>
			      <input className="input2" ref="input2" type="password"/>
			    </div>
			    <a href="http://sanguojiamen.applinzi.com/index.php/Index/register.html" >
			    <div className="con_butn" >注册</div>
			    </a>
			   
			    <div className="con_butn" onTouchStart={()=>this.loginHand()}>登录</div>
		
	     </div>
	    );
     }
  
}
export default LoginInput;
