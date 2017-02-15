function drag(obj) {
	obj.onmousedown = function(ev) {
		ev.preventDefault();
		var oldL = ev.clientX - this.getBoundingClientRect().left;
		var oldT = ev.clientY - this.getBoundingClientRect().top;
		document.onmousemove = function(ev) {
			var l = ev.clientX - oldL;
			var t = ev.clientY - oldT;
			if(l < 0) {
				l = 0;
			}
			if(t < 0) {
				t = 0;
			}
			obj.style.left = l + 'px';
			obj.style.top = t + 'px';
		}
		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}
}