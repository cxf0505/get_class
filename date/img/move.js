/*
 	obj:要运动的元素
 	attr:要改变的属性
 	duration：运动持续时间
 	target：目标位置
 	endFn:回调函数
 * 
 * */

function move(obj,attr,duration,target,endFn){
	//起始位置begin,获取元素当前的位置
	var b = parseFloat(getComputedStyle(obj)[attr]);
	//目标点count，要运动到的位置（传入）
	var c = target-b;
	//持续时间duration,毫秒（几毫秒运动完，传入）
	var d = duration;
	//开始运动的时间（获取运动开始执行时候的时间）
	var newTime = new Date().getTime();
	obj[attr] = setInterval(function(){
		//运动了多少时间，当前时间-开始的时间 = 运动了多少时间
		var t = new Date().getTime() - newTime;
		// 每次运动到的位置，开始位置+要运动的距离/总时间*运动了多少时间
		var v = b+ c/d*t;
		//如果运动的时间大于总时间，说明运动到指定位置了
		if(t >= duration){
			//有可能运动超出目标点，所以强制等于目标点
			v = target;
			//到达目标点，关闭定时器
			clearInterval(obj[attr]);
		}
		obj.style[attr] = v +'px';
		if(t >= duration){
			//如果有回调函数，返回后边的，也就是执行回调函数
			//如果没有回调函数，就返回前边，不执行了
			endFn && endFn();
		}
	},20);
}	