import React, { Component } from 'react';
//import LoginInput from './components/login_input';
//import HomeContent from './components/homeContent';
//import  CommonHead from './components/commonHead';
//import CommonFoot from './components/commonFoot';
//import Loadermore from './components/loaderMore';
//import HeadLeft from   './components/headLeft';
class Game extends Component {
  constructor(props){
     super();
     this.state={
        touch_startx:2,
        touch_starty:6,
        touch_x:0,
        touch_y:0,
        distenx:0,
        disteny:0,
        zi:"控制方向",
        opacity:1,
        scal:0,
     }
     this.onTouchStart=this.onTouchStart.bind(this)
     this.touchMove=this.touchMove.bind(this)
     this.touchEnd=this.touchEnd.bind(this)
     this.gongji_hand=this.gongji_hand.bind(this)
     
     this.one_rem=document.documentElement.clientWidth/16;
     this.doc_height=document.documentElement.clientHeight;
     this.all_hight_rem =this.doc_height/this.one_rem
   }

  onTouchStart(e){
  	e.preventDefault()
  	 e.stopPropagation()
  	  this.one_rem=document.documentElement.clientWidth/16;
  	     var x_rem= e.touches[0].clientX/this.one_rem
  	    
  	     var y_rem= e.touches[0].clientY/this.one_rem;
  	      
  	     (x_rem<2)?  x_rem=2:  x_rem=x_rem ;
  	     (x_rem>11)?x_rem=11:x_rem=x_rem ;
  	     (y_rem<2)?  y_rem=2: y_rem=y_rem ;
  	      (y_rem>this.all_hight_rem-2)?  y_rem=this.all_hight_rem-2: y_rem=y_rem ;
  	     console.log(y_rem)
  	   
  	  this.setState({ touch_startx:x_rem})
  	  this.setState({ touch_starty:y_rem})
  	  this.setState({ opacity:0.5})
     
  }
  touchMove(e){
  e.preventDefault()
  	 e.stopPropagation()
     if(e.touches.length == 1){
       let  distenx= e.touches[0].clientX-this.state.touch_startx*this.one_rem //x 方向的距离
       let  disteny= e.touches[0].clientY-this.state.touch_starty*this.one_rem //y 方向的距离
       let distenx_rem= distenx/this.one_rem
       let disteny_rem= disteny/this.one_rem
       //console.log(distenx_rem);
       let        juli= Math.sqrt(distenx_rem*distenx_rem+disteny_rem*disteny_rem) //三角的斜边
//     let    sin_juli= Math.sin(disteny_rem/juli)
//     let    cos_juli= Math.cos(distenx_rem/juli)   //左右
         if(distenx>0){    //右
         	  if(disteny<0){ //右上 
         	  	      this.setState({ zi:"右上"})                
         	  }else{
         	  	this.setState({ zi:"右下"})     
         	  }
         }else{//左的情况
	         	if(disteny<0){ //右边   
	         	  	      this.setState({ zi:"左上"})                 
	         	  }else{
	         	  	this.setState({ zi:"左下"})     
	         	  }
         }
       console.log(juli)
       //console.log(cos_juli)
       if(juli<=1.5){
       	 this.setState({ touch_x:distenx_rem})
          this.setState({ touch_y:disteny_rem})
       }
//     if(distenx>0){
//     	 this.setState({ zi:"右"})
//     }else{
//     	this.setState({ zi:"左"})
//     }
//     if(disteny>0){
//     	 this.setState({ zi:"上"})
//     }else{
//     	 this.setState({ zi:"下"})
//     }
         
     }
//     let        z= Math.sqrt(distenx*distenx+disteny*disteny)  //sin函数的斜边的值
//     let  sin_zhi= Math.abs(Math.sin(distenx/z))     //sin的绝对值避免负数的出现
//      if(sin_zhi>0.5){                              //角度大于45°的情况
//	        	if(distenx>=12*this.one_rem){ 
//			        this.setState({ distenx:12*this.one_rem})
//			       }else{
//			         this.setState({ distenx:distenx})
//			       }
//      }else{
//      	  this.setState({ distenx:0})
//      }
     
  // console.log(e.pageX)
   //console.log(e.screenX)
  }
  touchEnd(){
      this.setState({ touch_x:0})
      this.setState({ touch_y:0})
      this.setState({ opacity:1})
      
  }
  gongji_hand(e){
  	 e.preventDefault()
  	 e.stopPropagation()
  	this.setState({ scal:45})
  	setTimeout(function(){
  	this.setState({ scal:0})
  	}.bind(this),300)
  }
  
  render() {
  	 let style={left:`${this.state.touch_startx-2}rem`,top:`${this.state.touch_starty-2}rem`,opacity:this.state.opacity}
  	 let style2={left:`${1.5+(this.state.touch_x)}rem`,top:`${1.5+this.state.touch_y}rem`}
  	 let style3={transform:`rotate(${this.state.scal}deg)`}
    return (	
    	<div>
	    	<div  onTouchStart={this.onTouchStart}
	            onTouchMove={this.touchMove}  
	            onTouchEnd={this.touchEnd}
	          	style={{height:this.doc_height}} className="allgame">
			    	  <div className="zz" style={style3} >{this.state.zi}</div>
				    	<div style={style} className="lungang">
				    	   <div className="kzq" style={style2}></div>
				    	</div>
	    	</div> 
	    		<div className="gongji" onTouchStart={this.gongji_hand} ></div>
    	</div>
    );
  }
}
export default Game;
