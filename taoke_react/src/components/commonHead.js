import React, { Component } from 'react';
class CommonHead extends Component {
	 constructor(props){
	 	 super(props);
	 	 this.headimg_click= this.props.headimg_click
	 	 this.img_click=this.img_click.bind(this)
	 }
	 img_click(){
	 	console.log(this.headimg_click)
	 	 this.headimg_click()
	 }
  render() {
  	
  	let img_src =(this.props.head.headimg)?(<img alt="头像" src={this.props.head.headimg} />):""
    return (
         <div className="head">
           <div className="top_left" onClick={this.img_click} >{img_src}</div>
           <div className="mid"> {this.props.head.title}</div>
         </div>
    );
  }
}

export default CommonHead;
