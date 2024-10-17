let next=document.getElementById('random');
var choice='0123456789ABCDEF';

next.addEventListener('click',function(){

	var clr='#'
	for(var i=0;i<6;i++){
 		clr+=choice[Math.floor(Math.random()*16)];
	}
    document.body.style.backgroundColor=clr;      					
    document.getElementById('color').innerText = clr;
});
