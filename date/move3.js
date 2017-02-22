/*
 	运动函数(时间版)
 		obj,attr,count,duration,endFn
 		参数：
 		obj:元素，object
 		attr:样式，string
 		count:目标点位置，number
 		duration:运动持续时间，毫秒，number
 		endFn:回调函数，function
 * */

function move(obj,attr,count,duration,endFn){
	//运动开始的时间
	var old = new Date();
	var oldTime = old.getTime();
	//duration运动持续时间
	var d = duration;
	//起始位置
	var b = parseFloat(getComputedStyle(obj)[attr]);
	//count，计算目标点和起始点之间需要运动距离
	var c = count - b;
	clearInterval(obj[attr]);
	obj[attr] = setInterval(function(){
		//监测时间
		var New = new Date();
		var NewTime = New.getTime();
		//算出已过时间
		var t = NewTime - oldTime;
		//已经运动的时间等于设置的运动时间，就证明到目标点了
		if(t >= d){
			t = d;	
		}
		//元素位置 = 起始位置 + 运动距离/运动时间*已过时间
		var v = b + c/d*t;
		if(attr == 'opacity'){
			obj.style[attr] = v;
		}else{
			obj.style[attr] = v +'px';
		}
		if(t >= d){
			clearInterval(obj[attr]);
			if(typeof endFn == 'function'){
				endFn && endFn();
			}
		}
		
	},20)
				
				
}
