import React,{Component} from 'react';
export default class Min extends Component{
	constructor(props){
		super(props)
		this.state = {
			doubl:false,
			val:this.props.cont, 
		}
		this.onChangeCheck = this.onChangeCheck.bind(this);
		this.onClickd = this.onClickd.bind(this);
		this.onChangeVal = this.onChangeVal.bind(this);
		this.onDoubleFn = this.onDoubleFn.bind(this); 
		this.blurFn = this.blurFn.bind(this);
		this.onKeydownFn = this.onKeydownFn.bind(this);
		this.changeText = this.changeText.bind(this);
	}
	onChangeCheck(){//单选框
		this.props.onChangeCheck1(this.props._this)	 
	} 
	onClickd(){//删除
		this.props.onClickd1(this.props._this)
	}
	changeText(){//改变文字
		this.props._this.cont = this.state.val;
		this.props.changeText1(this.props._this)
	}
	onDoubleFn(){//双击
		this.setState({
			doubl:true
		},()=>{
			this.refs.te.focus()//聚焦
		})  
	} 
	onKeydownFn(ev){//键盘按下、输入
		if(ev.keyCode !== 13) return;
		this.blurFn(); 
	}
	blurFn(){//失焦
		this.refs.te.blur();//失焦
		this.setState({
			doubl:false
		})
		this.changeText(); 
//		console.log(this.state.val)
	}
	onChangeVal(){//解决输入框受限
		this.setState({ 
			val:this.refs.te.value
		})
	}
	render(){ 
		let sClass = null;
		sClass = this.props.check?'completed':''; 
		this.state.doubl?sClass += ' editing':'';  
		return(
			<li className={sClass}>
	            <div className="view">
	                <input className="toggle"
	                	type="checkbox"
	               	 	checked={this.props.check} 
	                	onChange={this.onChangeCheck} 
	                />
	                <label className=""
	                	onDoubleClick={this.onDoubleFn}
	                >
	               		{this.props.cont}
	               	</label>
	                <button className="destroy" 
	                	onClick={this.onClickd}>
	                </button>
	            </div>
	            <input type="text" 
	            	className="edit" 
	            	value = {this.state.val}
	            	onBlur = {this.blurFn} 
	            	onChange = {this.onChangeVal}
	            	onKeyDown = {this.onKeydownFn}
	            	ref="te"
	            />
	        </li>
		) 
	} 	 
}
