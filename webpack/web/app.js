import {aaa} from './a'; //a文件的aaa
import {bbb} from './b'; //b文件的bbb
require ('./style.css'); //命令style.css
console.log(aaa())
console.log(bbb())
import React from 'react';
import ReactDOM from 'react-dom'; 
import Li from './a'; 
//小例子一 
//class H extends React.Component{  
//	render(){
//		return ( 
//		
//<h1 className = "h1">我来了!aa!!</h1>
//		)
//	}
//} 
//ReactDOM.render(
//	<H />,
//	
//	function(){//回调函数document.getElementById('box'),
//		console.log(1+'我是页面加载完成执行的函数')
//	}
//)

//小例子二  父子组件数据通讯-渲染
//class Ul extends React.Component{  
//	constructor(props){
//		super(props) 
//	}
//	render(){
//		let arr = ['ni','zhen','xo'];
//		return ( 
//			<ul>
//				{  //当前this指向Ul组件对象
//					arr.map((ele)=>{//第一个参数返回内容，第二个参数返回索引，第三个参数返回整个数组 
//						return <Li key={ele} ele={ele}/>; 
//					}) 
//				}
//			</ul>
//		);
//	}
//} 
//class Li extends React.Component{  
//	render(){ 
//		return ( 
//			<li>{//当前this指向Li组件对象
//				 this.props.ele +'《我是父级的数据》！！！'
//			}</li> 
//		)
//	}
//} 
//ReactDOM.render(
//	<Ul />,
//	document.getElementById('box'),
//	function(){//回调函数
//		console.log(1+'我是页面加载完成执行的函数')
//	}
//)

//小例子三  语法糖使用
//let arr = ['ni','zhen','xo'];
//class Ul extends React.Component{  
//	render(){ 
//		let list = null;
//		list = this.props.data.map((el)=>{
//			let lis = {
//				el:el
//			}
//			return <Li {...lis} key={el}/>
//		});
//		return (  
//			<ul>{
//				list
//			}</ul>
//		);
//	}
//} 
//class Li extends React.Component{  
//	render(){  
//		return (   
//			<li>{
//				 this.props.el +'《我是父级的数据》！！！'
//			}</li> 
//		)
//	}
//} 
//ReactDOM.render(
//	<Ul data={arr}/>,
//	document.getElementById('box'),
//	function(){//回调函数
//		console.log(1+'我是页面加载完成执行的函数')
//	}
//)


//小例子四
class H extends React.Component{  
	constructor(props){//如果数据为传进来的，那么在初始化状态的时候，super中要传入props
		super(props)
		this.state = {//初始状态配置
			arr:this.props.arr,
			val:'',
			checked:false,
			select:'上',
			num:0
		} 
		this.fnClick = this.fnClick.bind(this);
		this.onChageText = this.onChageText.bind(this);
		this.onChecked = this.onChecked.bind(this);
		this.onSelect = this.onSelect.bind(this)
	}
	fnClick(){//点击数++
		let {num,arr} = this.state;
		let newArr = Object.assign([],arr);//这样写更专业。。。
		num++;
		let newData ={
			t:'我是'+ num,
			c:'qq',
			w:'weixin'
		}
		newArr.push(newData)
		this.setState({
			 num,//简介表达，不用num:num
			 arr:newArr//这样写更专业。。。
		}) 
	} 
	onSelect(){//下拉
		this.setState({
			 select:this.refs.select.value
		})
		console.log(this.refs.select.value)
	}
	onChecked(){//单选
		this.setState({
			checked:!this.state.checked
		}) 
		console.log(this.state.checked)
	}
	onChageText(){//输入内容
		this.setState({
			val:this.refs.tex.value
		}) 
//		console.log(this.state)
	}
	render(){  
		let arr1 = Object.assign([],this.state.arr);
		let list = null;
		list = arr1.map((ele,i)=>{
			let datas = {
				t:ele.t,
				c:ele.c,
				w:ele.w,
				key:i+(new Date().getTime())
			}
			return <Li {...datas}/> 
		})
		return (  
			<div>
				<select value={this.state.select} ref="select" onChange={this.onSelect}>
					<option>上</option>
					<option>中</option>
					<option>下</option>
				</select>
				<input type="button" value="点击创建" onClick={this.fnClick}/>
				<input type="checkbox" checked={this.state.checked} onChange={this.onChecked} />
				<input type="text" ref="tex" value={this.state.val} onChange={this.onChageText} />
				<span>{this.state.val}</span>
				<ul> 
					<h1>{this.state.num}</h1>
					{list}
				</ul>
			</div>
		)
	}
} 
let data = {
	arr:[{t:'qing',c:'he',w:'wan'},{t:'qi',c:'he',w:'wa'}]
}
ReactDOM.render(
	<H {...data}/>,
	document.getElementById('box'),
	function(){//回调函数
		console.log(1+'我是页面加载完成执行的函数')
	}
)



//生产环境，使用 --save 安装
//插件只用于开发环境，使用 --save-dev 安装