function ajax(json){
		var ajax = new XMLHttpRequest();
		var settings = {
			url:json.url || '',
			data:json.data || {},
			methed:json.methed || 'get',
			dataType:json.dataType || 'json',
			success:json.success || function(){},
			fail:json.fail || function(){}
		}
		var arr = [];
		for(var attr in settings.data){
			arr.push(attr +'='+ settings.data[attr]);
		}
		
		settings.data = arr.join('&');
		
		
		switch(settings.methed.toLowerCase()){
			case 'get':
				ajax.open(settings.methed,settings.url+'?'+settings.data);
				ajax.send();
			break;
			case 'post':
				ajax.open(settings.methed,settings.url);
				ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
				ajax.send(settings.data);
			break;
			default:
				ajax.open('get',settings.url+'?'+settings.data);
				ajax.send();
			break;
		}
		
		ajax.onreadystatechange = function(){
			if(ajax.readyState === 4){
				if(ajax.status >= 200 && ajax.status <= 207){
					switch(settings.dataType){
						case 'json':
							settings.success(JSON.parse(ajax.responseText));
						break;
						case 'xml':
							settings.success(ajax.responseXML);
						break;
						case 'str':
							settings.success(ajax.responseText);
						break;	
					}
				}else{
					settings.fail(ajax.status);
				}
			}
		}	
	}
