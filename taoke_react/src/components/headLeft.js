import React, { Component } from 'react';
class HeadLeft extends Component {
  constructor(props){
	 	 super(props);

	 }
  ComponentDidMount(){
        
    }
  render() {
     var dis =this.props.distenx
     var one_rem=document.documentElement.clientWidth/16;
      var a=-12*one_rem+dis
    let style={"transform":`translate3d(${a}px, 0, 0)`,background:"red"};
    return (
         <div style={style} className="fix_head_left">
         </div>
    );
  
  }
}

export default HeadLeft;

