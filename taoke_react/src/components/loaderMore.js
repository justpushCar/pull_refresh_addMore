import React, { Component } from 'react';
import Tloader from '../css/loaderMore/touch_ref_addmore';
class Loadermore extends Component {
	 constructor(prop){
	 	 super();
	 	 this.state={
	 	 	//确定是否可以刷新
	 	 	canRefreshResolve:1,
            canPullUpAddMore:true, //是否开启下拉刷新
            hasMore:0,            
           // initializing:1,   
           conter:[]
           }
			//	 	 initializing
			//
			//0: do not display the progress bar
			//1: start progress bar
			//2: progress to end
			 //方法传给子组件  需要把当前对象传给他
	 	 this.refresh=this.refresh.bind(this);
	 	 this.loadMore=this.loadMore.bind(this);
	 	 this.jsonlist_url="http://1.libikun.applinzi.com/index.php/Index/indexJson.html"
	 	 
	 }
	 refresh(resolve, reject){
	

	 	// if(this.state.canRefreshResolve) return reject();
       this.getjsonlist= fetch(this.jsonlist_url)
       this.getjsonlist.then(
		   		response=>response.json()
		     ).then(
		     	data=>{
		     		this.setState({conter:data});
		     		resolve()
		     		reject();
		     	}
		    )
		 
          
	 }
	 
	 loadMore(resolve){
	 	let datas=this.state.conter
	 	fetch(this.jsonlist_url)
	        .then(
		   		response=>response.json()
		     ).then(
		     	data=>{
		     		
		     		datas=datas.concat(data)
		     		console.log(datas);
		     		this.setState({conter:datas,  hasMore:true});
		     		resolve();
		     	}
		    )
	 }
	 
	 componentDidMount(){
	 	     fetch(this.jsonlist_url)
		   	.then(
		   		response=>response.json()
		     ).then(
		     	data=>{
		     		this.setState({conter:data,hasMore: 1});
		     	}
		    )
		 // window.addEventListener('scroll', this.handleScroll.bind(this))
		// this.rem_px=window.screen.width/16
		 
	 }
	handleScroll(){
		 var s= document.body.scrollTop
	      if(s>this.rem_px*6){
	      	this.setState({canRefreshResolve:0});
	      	console.log(this.state.canRefreshResolve)
	      }else{
	      	this.setState({canRefreshResolve:1});
	      	console.log(this.state.canRefreshResolve)
	      }
	}
  render() {
     var {  hasMore, initializing, refreshedAt, canRefreshResolve,canPullUpAddMore } = this.state;
        var { refresh, loadMore, toggleCanReresh } = this;
        var list = [];

      if(this.state.conter.length===0){
         	this.contentdiv =<div className="spinner">
						  <div className="double-bounce1"></div>
						  <div className="double-bounce2"></div>
					    </div>
        }else{
  		 this.contentdiv=this.state.conter.map(
		 	(value,index)=>{
		 		return	<div className="content" key={index}>
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
        	<div >
                <Tloader className="allcontent"  canPullUpAddMore={canPullUpAddMore} onRefresh={refresh} onLoadMore={loadMore} hasMore={hasMore} initializing={initializing}>
                    <ul>{this.contentdiv}</ul>
                </Tloader>    
            </div>   
       
        );
    }
 

}

export default Loadermore;
