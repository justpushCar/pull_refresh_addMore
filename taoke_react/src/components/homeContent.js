import React, { Component } from 'react';

class HomeContent extends Component {
	 constructor(prop){
	 	 super();
	 	 this.state={conter:[]}
	 }

    
	 
   componentDidMount(){
	   	fetch("http://1.libikun.applinzi.com/index.php/Index/indexJson.html")
		   	.then(
		   		response=>response.json()
		     ).then(
		     	data=>{
		     		this.setState({conter:data});
		     	}
		    )
   }
  render() {
         if(this.state.conter.length===0){
         	this.contentdiv =<div className="spinner">
						  <div className="double-bounce1"></div>
						  <div className="double-bounce2"></div>
					    </div>
         }else{
         
  		 this.contentdiv=this.state.conter.map(
		 	(value)=>{
		 		return	<div className="content">
					 	 <div className="wrap">
					           <div className="wrap1">
					           		<div className="title">{value.kecheng}/{value.created_time}</div>
					           		<div className="head_img"><img alt="头像" src={"http://1.libikun.applinzi.com/Public/img/nv.png"} /></div> 
					                <div className="clboth" ></div>
					                <div className="bao">报酬</div>
					                <div className="baochou_content">{value.huibao}</div>
					           </div>
					           <div className="wrap2">
					                <div className="time">1小时0分钟前</div>
					                <div className="location">{value.dizhi} {value.school}</div> 
					           </div>
					    </div>
					   </div>
		 	}
	 	
	      )
  		}
	
    return (
        <div   className="allcontent">
	       {this.contentdiv} 
        </div>
    );
  }
}

export default HomeContent;
