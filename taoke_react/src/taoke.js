import React, { Component ,cloneElement } from 'react';
//import LoginInput from './components/login_input';
//import HomeContent from './components/homeContent';
import  CommonHead from './components/commonHead';
import CommonFoot from './components/commonFoot';
import Loadermore from './components/loaderMore';
import HeadLeft from   './components/headLeft';
import {dologin} from './action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
 class Taoke extends Component {
  constructor(props){
     super();
     this.state={
        touch_startx:0,
        touch_starty:0,
        touch_left:0,
        touch_right:0,
        distenx:0,
        disteny:0            //y方向的距离
     }
     this.onTouchStart=this.onTouchStart.bind(this)
     this.touchMove=this.touchMove.bind(this)
     this.touchEnd=this.touchEnd.bind(this)
     this.headimg_click=this.headimg_click.bind(this)
     this.one_rem=document.documentElement.clientWidth/16;
   }

  onTouchStart(e){
  	 e.stopPropagation()
  	if(this.state.distenx>=11*this.one_rem){
  		this.setState({ distenx:this.state.distenx})
  	}else{
  		this.setState({ touch_startx:e.touches[0].clientX})
  		this.setState({ touch_starty:e.touches[0].clientY})
      // this.setState({ touch_start:(e.touches[0].clientX)});
      this.setState({ distenx:20})
  	}
      
  }
  touchMove(e){
  // e.preventDefault()
     if(e.touches.length == 1){
       let  distenx= e.touches[0].clientX-this.state.touch_startx //x 方向的距离
       let  disteny= e.touches[0].clientY-this.state.touch_starty //y 方向的距离
       let        z= Math.sqrt(distenx*distenx+disteny*disteny)  //sin函数的斜边的值
       let  sin_zhi= Math.abs(Math.sin(distenx/z))     //sin的绝对值避免负数的出现
        if(sin_zhi>0.5){                              //角度大于45°的情况
	        	if(distenx>=12*this.one_rem){ 
			        this.setState({ distenx:12*this.one_rem})
			       }else{
			         this.setState({ distenx:distenx})
			       }
        }else{
        	  this.setState({ distenx:0})
        }
     }
  // console.log(e.pageX)
   //console.log(e.screenX)
  }
  touchEnd(){
       if(this.state.distenx>120){ 
       	//12rem 是左拉框的 宽度
        this.setState({ distenx:12*this.one_rem})
       }else{
        this.setState({ distenx:0})
       }
  }
  
  headimg_click(){
  	 this.setState({ distenx:12*this.one_rem})
  }
  render() {
     
    const childrenWithProps = React.Children.map(this.props.children,
        (child) => cloneElement(child, {
          actions: this.props.actions,
          login_date: this.props.login_date
        })
        )

    return (
    	<div className="alltent"
      onTouchStart={this.onTouchStart}      
      onTouchMove={this.touchMove}
      onTouchEnd={this.touchEnd}>
    	 <CommonHead  headimg_click={this.headimg_click}  head={{title:"主页",headimg:"http://sanguojiamen.applinzi.com/Public/img/nan.png"}}/>
         {childrenWithProps}
    	 <HeadLeft distenx={this.state.distenx} one_rem={this.one_rem} />
         <CommonFoot/>
    	</div> 
    );
  }
}
 
 const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(dologin, dispatch)
})

const mapStateToProps = state => {
	 const{login}=state
   return login
}
export default connect(mapStateToProps, mapDispatchToProps)(Taoke)
 
