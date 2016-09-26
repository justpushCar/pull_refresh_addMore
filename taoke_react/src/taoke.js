import React, { Component } from 'react';
//import LoginInput from './components/login_input';
//import HomeContent from './components/homeContent';
import  CommonHead from './components/commonHead';
import CommonFoot from './components/commonFoot';
import Loadermore from './components/loaderMore';
import HeadLeft from   './components/headLeft';
class Taoke extends Component {
  constructor(props){
     super();
     this.state={
        touch_start:0,
        touch_left:0,
        touch_right:0,
        distenx:0
     }
     this.onTouchStart=this.onTouchStart.bind(this)
     this.touchMove=this.touchMove.bind(this)
     this.touchEnd=this.touchEnd.bind(this)
   }

  onTouchStart(e){
      this.setState({ touch_start:e.touches[0].clientX})
    // this.setState({ touch_start:(e.touches[0].clientX)});

  }
  touchMove(e){
   e.preventDefault()
     if(e.touches.length == 1){
    let  distenx=  e.touches[0].clientX-this.state.touch_start
    
     var one_rem=document.documentElement.clientWidth/16;
       if(this.state.distenx>12*one_rem){ 
        this.setState({ distenx:12*one_rem})
       }else{
         this.setState({ distenx:distenx})
       }
     }
  // console.log(e.pageX)
   //console.log(e.screenX)
  }
  touchEnd(){
        var one_rem=document.documentElement.clientWidth/16;
       if(this.state.distenx>120){ 
        this.setState({ distenx:12*one_rem})
       }else{
        this.setState({ distenx:0})
       }
  }

  render() {

    return (
    	<div className="alltent"
    
      onTouchStart={this.onTouchStart}      
      onTouchMove={this.touchMove}
      onTouchEnd={this.touchEnd}>
    	 <CommonHead head={{title:"主页",headimg:"http://1.libikun.applinzi.com/Public/img/nan.png"}}/>
    	 <Loadermore/>
    	 <HeadLeft distenx={this.state.distenx} />
         <CommonFoot/>
    	</div> 
    );
  }
}
export default Taoke;
