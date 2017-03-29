import React,{Component} from 'react';
import ReactDOM from 'react-dom';
require('../css/index.css');
require('../css/base.css'); 
import Min from './min.js';
import Footer from './footer.js';

let data = {
	arr:[{check:false,cont:'哈哈哈哈',id:0},{check:false,cont:'哈哈哈哈2',id:1}]
}
class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			arr:this.props.arr,
			val:'', 
			choose:'全部',  
		} 
		this.onchangeText = this.onchangeText.bind(this);
		this.onkey = this.onkey.bind(this); 
		this.onChangeCheck1 = this.onChangeCheck1.bind(this); 
		this.onAllCheck = this.onAllCheck.bind(this);
		this.onClickd1 = this.onClickd1.bind(this);
		this.onClickLi1 = this.onClickLi1.bind(this);
		this.onRemovelist1 = this.onRemovelist1.bind(this);
		this.changeText1 = this.changeText1.bind(this);
	} 
	onchangeText(ev){//输入框
		this.setState({
			val:ev.target.value
		}) 
	} 
	changeText1(obj){//双击失焦时改变数据中文字内容
		let {arr} = Object.assign([],this.state);  
		arr=arr.map((ele)=>{
			if(ele.id == obj.id){
				ele.cont = obj.cont;
			} 
			return ele;
		})
		this.setState({ 
			arr, 
		})   
	}
	onkey(ev){//添加数据，enter键的触发
		let arr = Object.assign([],this.state.arr); 
		if(ev.keyCode!==13||ev.target.value =='') return
		let newData = {
			check:false,
			cont:ev.target.value,   
			key:new Date().getTime(), 
			id:new Date().getTime(),
		}
		arr.unshift(newData)
		this.setState({
			arr,  
			val:'',
		})   
	}
	onAllCheck(ev){//全选按钮  
		let {checked:allcheck} = ev.target; 
		let {arr} = Object.assign([],this.state);  
		arr.map((ele)=>{
			return ele.check = allcheck; 
		})
		this.setState({ 
			arr, 
		})   
	}
	onChangeCheck1(obj){ //单选 
		let arr = Object.assign([],this.state.arr);  
		arr.map((ele)=>{
			if(ele.id == obj.id){   
				return ele.check = !ele.check
			} 
		}) 
		this.setState({
			arr,   
		})    
	} 
	onClickd1(obj){//删除单个  
		let arr = Object.assign([],this.state.arr); 
		arr=arr.filter((ele,i)=>{ 
			return ele.id != obj.id 
		})
		this.setState({
			arr,  
		})    
	}
	onClickLi1(obj){ //点击全部、未完成、已完成选项
		let newText = this.state.choose;
		newText = obj.text;//点的哪个    
		this.setState({
			choose:newText,
		}) 
	}
	onRemovelist1(){//清除已完成  
		let arr = Object.assign([],this.state.arr); 
		arr = arr.filter((ele,i)=>{  
			return ele.check== false 
		})
		this.setState({
			arr,  
		})  
	}
	render(){    
		let {arr,choose} = Object.assign([],this.state);
		let num = arr.length;  
		let footer = null,
		list = null,
		AllCheck = null;
		arr.map((ele,i)=>{
			if(ele.check){
				num--;
			}
		})
		let listMap = arr.filter((ele,i)=>{//得到筛选后的数据
			switch(choose){
				case '未完成':
					return !ele.check
					break;
				case '已完成':
					return ele.check
					break;
				default:
					return true
					break;
			}
		})  
		list = 	listMap.map((ele,i)=>{ //map一下，把每次返回的Min组件内容给list
			let datas = {
				check:ele.check,
				cont:ele.cont, 
				onChangeCheck1:this.onChangeCheck1,
				onClickd1:this.onClickd1,
				changeText1:this.changeText1,
				key:i,
				id:ele.id, 
				_this:ele,
			}
			return <Min {...datas}/>   
		}) 
		if(arr.length){//如果arr的length大于0才显示
			//全选按钮
			AllCheck = (<input className="toggle-all" 
		                	type="checkbox" 
		                	checked={this.state.allcheck||!num} 
		               		onChange={this.onAllCheck}
		            		/>)
			//底部内容
			let footerData = {
				onClickLi1:this.onClickLi1,
				onRemovelist1:this.onRemovelist1,
				choose:choose,
				num:num, 
			} 
			footer = (<Footer {...footerData}/>) 
		}
		
		return(
			<div> 
				<header className="header" >
	                <h1>todos</h1>
	                <input className="new-todo" 
		                placeholder="请输入内容" 
		                value={this.state.val} 
		                onChange={this.onchangeText} 
		                onKeyDown={this.onkey} 
		            />
	            </header>
	            <section className="main">
	                {AllCheck}
	                <ul className="todo-list"> 
	                	{list}
	                </ul>
	            </section> 
		        {footer}
        	</div>
		)
	} 
}
ReactDOM.render(
	<App {...data}/>,
	document.getElementById('box')
)
