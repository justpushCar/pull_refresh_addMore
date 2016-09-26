import React, { Component } from 'react';
import { Link, hashHistory} from 'react-router';
class LoginInput extends Component {
	 	loginHand(){
  		var va1= this.refs.input1.value
  		var va2= this.refs.input2.value
  		if(va1===""&&va2===""){
  			alert("账号密码不能为空")
  		}else{
			var loginjson=	 fetch("http://libikun.sinaapp.com/index.php/Index/loginJson.html", {
				    method: "POST",
				      headers: { 
                             "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
                                }, 
				    body: 'phone='+va1+'&password='+va2
			}) 
			loginjson.then(
			   res=>
			   	res.json()
			   
			).then(
				data=>{
					 if(data.status===2){
		                 alert(data.info);
		             }
		             if(data.status===0){
		                  alert(data.info);
		             }
		             if(data.status===1){
		                hashHistory.push("/")
		              }
				}
			);
  		}
  		
  	}
  render() {
 
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
		    <Link to="/register">
		    <div className="con_butn" >注册</div>
		    </Link>
		    <div className="con_butn" onTouchStart={()=>this.loginHand()}>登录</div>
	
     </div>
    );
  }
}
export default LoginInput;
