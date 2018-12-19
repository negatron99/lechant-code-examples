var canvas = document.getElementsByTagName("canvas")[0];
var context = canvas.getContext('2d');
 
var drawing = false;

function dragStart(){
  	//console.log("mouse down");
	if(drawing === true){
		draw(event);
	}else{
		drawing = true;
	}
	
}
function drag(){
	//console.log("mouse move");
	if(drawing === true){
		draw(event);
	}
	
}
function dragEnd(){
	//console.log("mouse up");
	if(drawing === true){
		draw(event);
		drawing = false;
	}
}

canvas.addEventListener("mousedown",dragStart);
canvas.addEventListener("mousemove",drag);
canvas.addEventListener("mouseup",dragEnd);

var lastX, lastY;
function draw(event){
	var X= event.clientX-canvas.offsetLeft,
        Y = event.clientY-canvas.offsetTop;
 
    	if (lastX) {
        	context.beginPath();
        	context.moveTo(lastX,lastY);
        	context.lineTo( X,Y);
		context.strokeStyle ="green";
        	context.stroke();
    	}

    	lastX = X;
    	lastY = Y;
}
