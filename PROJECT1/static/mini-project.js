
	var a=0;
	var h=document.getElementById('check');
	var span=document.getElementsByClassName('span')[0];
		function backspace(){
		var s=document.cal.screen.value;
		document.cal.screen.value="";
		for (var i = 0; i < s.length-1; i++) {
			document.cal.screen.value+=s[i];
		}   
	}
	function history(){
		if(h.checked){
			span.style.display='block';
			span.style.animation='historyVisible 0.7s';
		
		}
		else{
			span.style.animation='historyInvisible 1s';
			 var t=0;
			 var interval = setInterval(function(){
			 	t+=1;
			 	if(t==2){
			 		clearInterval(interval);
			 		span.style.display='none';

			 	}
			 },500);


		}
	}

function compute(){
	var query=document.cal.screen.value;
	document.cal.screen.value=eval('('+document.cal.screen.value+')');
	var result=document.cal.screen.value;

	document.getElementById('query').value=query;
	document.getElementById('result').value=result;
	document.getElementById('form').submit();
}