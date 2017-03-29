function aaa(){
return '这是A文件哦！！！<a.js>';
} 

export {aaa}

import React,{Component} from "react"; 
export default class Li extends Component{
	render(){ 
		return ( 
			<li>
				<p>{this.props.t}</p>	
				<p>{this.props.c} </p>	
				<p> {this.props.w}</p>	
			</li>
		)
	}
} 
