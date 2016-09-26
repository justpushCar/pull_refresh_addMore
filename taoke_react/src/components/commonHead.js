import React, { Component } from 'react';
class CommonHead extends Component {
	 constructor(props){
	 	 super(props);
	 }
  render() {
  	let img_src =(this.props.head.headimg)?(<img alt="头像" src={this.props.head.headimg} />):""
    return (
         <div className="head">
           <div className="top_left">{img_src}</div>
           <div className="mid"> {this.props.head.title}</div>
         </div>
    );
  }
}

export default CommonHead;
