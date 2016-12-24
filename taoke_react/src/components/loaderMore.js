import React, { Component } from 'react';
import Tloader from './loaderMore/touch_ref_addmore';
class Loadermore extends Component {
	 constructor(prop){
	 	 super();
	 	 this.state={
	 	 	page : 1, //页数
	 	 	//确定是否可以刷新
	 	 	canRefreshResolve:1,
            canPullUpAddMore:true, //是否开启下拉刷新
            hasMore:1,    //是否还有数据        
           // initializing:1,   
           conter:[] //存放数据
           }
			//	 	 initializing
			//
			//0: do not display the progress bar
			//1: start progress bar
			//2: progress to end
			 //方法传给子组件  需要把当前对象传给他
	 	 this.refresh=this.refresh.bind(this);
	 	 this.loadMore=this.loadMore.bind(this);
	 	 this.jsonlist_url="http://sanguojiamen.applinzi.com/index.php/Index/indexJson.html"
	 	 
	 }
	 refresh(resolve, reject){
	 	// if(this.state.canRefreshResolve) return reject();
       this.getjsonlist= fetch(this.jsonlist_url+`?page=1`)
       this.getjsonlist.then(
		   		response=>response.json()
		     ).then(
		     	data=>{
		     		this.setState({conter:data.data,page:1});
		     		resolve()
		     		reject();
		     		
		     	}
		    )
		 
          
	 }
	 
	 loadMore(resolve){
	 	let datas=this.state.conter
	 	fetch(this.jsonlist_url+`?page=${this.state.page}`)
	        .then(
		   		response=>response.json()
		     ).then(
		     	data=>{
		     		
		     		let pages=data.pages
		     		
		     		if(this.state.page<pages){
		     			datas=datas.concat(data.data)
		     		  this.setState({conter:datas,  hasMore:true,page:this.state.page+1});
		     		}else this.setState({conter:datas,hasMore:false,canRefreshResolve:0,});
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
		     		this.setState({conter:data.data,hasMore: 1});
		     	}
		    )
		 // window.addEventListener('scroll', this.handleScroll.bind(this))
		// this.rem_px=window.screen.width/16
		 
	 }
//	handleScroll(){
//		 var s= document.body.scrollTop
//	      if(s>this.rem_px*6){
//	      	this.setState({canRefreshResolve:0});
//	      	console.log(this.state.canRefreshResolve)
//	      }else{
//	      	this.setState({canRefreshResolve:1});
//	      	console.log(this.state.canRefreshResolve)
//	      }
//	}
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
		 		 var nowtime=(new Date()).valueOf();

                        var timestamp2 = Date.parse(new Date(value.created_time.replace(/-/g,"/"))) ;
                        var timecha=nowtime-timestamp2;
                        var leave1=timecha%(24*3600*1000)    //计算天数后剩余的毫秒数
                        var day=Math.floor(timecha/(24*3600*1000))  
                        var lev =timecha/(3600*1000)
                        var hours=Math.floor( lev)
                        var leave2=leave1%(3600*1000);
                        var xiaoshi=Math.floor((timecha/(3600*1000))%24)
                        
                        var minutes=Math.floor(leave2/(60*1000))
                        timestamp2 = timestamp2 / 1000;
                        let img=""
                         if(value.headimgurl){
                            img= value.headimgurl;
                        }else {
                            if(value.sex=='男'){
                            img="http://sanguojiamen.applinzi.com/Public/img/nan.png";
                            }else{
                                img="http://sanguojiamen.applinzi.com/Public/img/nv.png";
                            }
                        }
		 		
		 		return	<div className="content" key={index}>
					 	 <div className="wrap">
					           <div className="wrap1">
					           		<div className="title">{value.kecheng}/{value.created_time}</div>
					           		<div className="head_img"><img alt="头像" src={img} /></div> 
					                <div className="clboth" ></div>
					                <div className="bao">报酬</div>
					                <div className="baochou_content">{value.huibao}</div>
					           </div>
					           <div className="wrap2">
					                <div className="time">{day}天{xiaoshi}小时{minutes}分钟前</div>
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
