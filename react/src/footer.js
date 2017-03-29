import React,{Component} from 'react';
export default class Footer extends Component{
	constructor(props){
		super(props)
		this.onClickLi = this.onClickLi.bind(this);
		this.onRemovelist = this.onRemovelist.bind(this);
	} 
	onClickLi(ev){//点击全部、未完成、已完成  
		this.props.onClickLi1(ev.target); 
	}
	onRemovelist(){//清除已完成
		this.props.onRemovelist1(); 
	}
	render(){    
		let {choose,num} = this.props;
		return(
			<footer className="footer">
				<span className="todo-count">  
			        <strong>{num}</strong>
		        	<span>条未选中</span> 
			    </span>
			    <ul className="filters" >
			    	<li><a href="#/all" className={choose=='全部'?'selected':''} onClick={this.onClickLi} >全部</a></li> 
		    		<li><a href="#/active" className={choose=='未完成'?'selected':''} onClick={this.onClickLi} >未完成</a></li> 
		    		<li><a href="#/completed" className={choose=='已完成'?'selected':''} onClick={this.onClickLi} >已完成</a></li>  
			    </ul>
			    <span className="clear-completed" onClick={this.onRemovelist}>清除已完成</span>
		    </footer>
		) 
	} 	 
}