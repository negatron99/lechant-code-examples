var canvas = document.getElementsByTagName("canvas")[0];
var context = canvas.getContext('2d');
var coordinates = {X:[],Y:[]}; 
var drawing = new Boolean(false);
function dragStart(){
  	//console.log("mouse down");
	if(drawing === true){
		addCoor(event);
		draw();
	}else{
		drawing = true;
		addCoor(event);
	}
	
}
function drag(){
	//console.log("mouse move");
	if(drawing === true){
		addCoor(event);
		draw();
	}
	
}
function dragEnd(){
	//console.log("mouse up");
	if(drawing === true){
		addCoor(event);
		drawing = false;
	}
	draw();
	coordinates.X.length =0;
	coordinates.Y.length =0;
}

function addCoor(event){
	coordinates.X.push(event.clientX-canvas.offsetLeft);
	coordinates.Y.push(event.clientY-canvas.offsetTop);
	//console.log(coordinates)
}
canvas.addEventListener("mousedown",dragStart);
canvas.addEventListener("mousemove",drag);
canvas.addEventListener("mouseup",dragEnd);

function draw(){
	context.beginPath();
	for(let i=0;i<coordinates.X.length;i++){
		context.lineTo(coordinates.X[i] , coordinates.Y[i]);
		//console.log(coordinates.X[i] , coordinates.Y[i]);
	}
	context.strokeStyle ="green";
	context.stroke();
}