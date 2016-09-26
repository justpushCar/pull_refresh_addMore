import React, { Component } from 'react';
import { Link } from 'react-router';
class Commonfoot extends Component {
	 constructor(prop){
	 	 super();
     this.state={
      aa:3
     }

	 }

  render() {
    return (
         <div className="fix_foot" >
           <div className="l">
               <Link to="/login">
	           <div><i className="fa fa-star fa-2x"></i></div>
	           <div className="text">英雄榜</div>
	           </Link>
           </div>
           <div className="m">
               <Link to="/">
               <div><i className="fa fa-home fa-2x"></i></div>
	           <div className="text">主页</div>
	            </Link>
           </div>
           <div className="r">
            <Link to="/login">
               <div><i className="fa fa-user fa-2x" aria-hidden="true"></i></div>
	           <div className="text">用户中心</div>
	        </Link>
           </div>
         </div>
    );
  }
}

export default Commonfoot;
