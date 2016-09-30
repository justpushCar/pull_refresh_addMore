import React, { Component } from 'react';
class HeadLeft extends Component {
  constructor(props){
	 	 super(props);

	 }
  ComponentDidMount(){
        
    }
  render() {
     let dis =this.props.distenx  //最大宽度为12rem
         
     let one_rem =this.props.one_rem
     
      dis>=12*one_rem?12*one_rem:dis   //大于最大值 再改变
     let a=-12*one_rem+dis  //左拉宽长度  默认是 -12rem 
       let half =3*one_rem  //拉出宽度超出一半 情况下 radius 回撤 从 100%变成你0%
       let radius_l="100%";
     let  opacity=0.3
     if(dis>half){
     	 let zhi=Math.ceil( (dis-3*one_rem)/(((12-3)*one_rem)/100))
     	let  baifeng_zhi= 100-zhi
     	 radius_l=baifeng_zhi+'%'
     	  let opacity_zhi= (dis-3*one_rem)/(((12-3)*one_rem)/0.7)
     	 opacity=0.3+opacity_zhi
     }
     
    let style={"transform":`translate3d(${a}px, 0, 0)`,background:"#666","border-top-right-radius":radius_l,"border-bottom-right-radius":radius_l,
     opacity:opacity
    };
    return (
         <div style={style} className="fix_head_left">
         </div>
    );
  
  }
}

export default HeadLeft;

