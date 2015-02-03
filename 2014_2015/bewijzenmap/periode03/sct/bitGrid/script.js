window.addEventListener("load",function(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var mouseX,mouseY;
	var grid = [];
	var number = 48;
	var bit;
	
	for(i = 0; i< number; i++){
		var sx = (i%8)*100;
		var sy = Math.floor(i/8)*100;
		grid[i] = new Bit(context,true,sx,sy,100,100,"#00FF00","#ff0000");		
	}
	//grid.push(bit);
	drawCanvas();
	
	window.addEventListener("mousedown",function(e){
		drawCanvas();
	});		
	
	function drawCanvas(){
		context.clearRect(0,0,800,450);
		for(i = 0; i<number; i++){
			bit = grid[i];
			bit.draw();
			//console.log(grid[i]);
		}
		grid.toString();
	}
	
});

function Bit(context,state,x,y,width,height,cOn,cOff){
	var self = this;
	this.context = context
	this.state = state;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.cOn = cOn;
	this.cOff = cOff; 
	
	this.update = function(){
		this.state = !self.state;
	}
	
	this.draw = function(){
		var color;
		this.context.strokeStyle = "#000000";
		this.context.strokeRect(this.x,this.y,this.width,this.height);
		if(this.state){
			color = this.cOn;
		} else {
			color = this.cOff
		}
		this.context.fillStyle = color;
		this.context.fillRect(this.x,this.y,this.width,this.height,color);
	}
	
	addEventListener("mousedown",function(e){
		var mouseX = e.clientX - canvas.offsetLeft;
		var mouseY = e.clientY - canvas.offsetTop;
		console.log(canvas.offsetTop,canvas.offsetLeft);
		if(mouseX>self.x && mouseX<self.x + self.width && mouseY>self.y && mouseY< self.y+self.height){
			self.state = !(self.state);
		}
	});
}
