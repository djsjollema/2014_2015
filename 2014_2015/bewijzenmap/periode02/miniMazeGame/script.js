window.addEventListener("load",function(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var sx,sy,row,col,tileId;
	var rotation = 0;
	var animationIndex = 0;
	var animationArray = [8,7,6,5,4,3,2,1];
	var dx = 0;
	var dy = -1
	var x = 128;
	var y = 128;
	var speed = 3;
	var tx,ty;
	
	var im = new Image();
	var tiles = [[25,0,0,25,0,0,0,30],
				[0,0,0,0,25,0,0,26],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,26,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,25]];
	
	im.src = "Tanks_sheet.png";
	
	window.addEventListener("keydown",function(e){
		switch(e.keyCode){
			case 37: 
				dx = -1;
				dy = 0;
				rotation = -90;
				break;
			case 38: 
				dx = 0;
				dy = -1;
				rotation = 0;
				break
			case 39: 
				dx = 1;
				dy = 0;
				rotation = 90;
				break;
			case 40: 
				dx = 0;
				dy = 1;
				rotation = 180;
				break;
			default:
				break;
		}
			
	},false);
	
	im.addEventListener("load",function(){
		setInterval(gameLoop,100);
	},false);
	
	function gameLoop(){
		
		
		sx = animationArray[animationIndex]%8 *32;
		sy = Math.floor(animationArray[animationIndex]/8)*32;
		context.setTransform(1,0,0,1,0,0);
		context.clearRect(0,0,256,256);
		drawTiles();
		context.translate(x+16,y+16);
		context.rotate(rotation*Math.PI/180);
		context.drawImage(im,sx,sy,32,32,-16,-16,32,32);
		animationIndex++;
		x += speed*dx;
		y += speed*dy;
		if(x < -32) x = 256;
		if(x>256) x = -32;
		if(y < -32) y = 256;
		if(y>256) y = -32;
		
		if(animationIndex > animationArray.length - 1) animationIndex = 0;
		
	}
	
	function drawTiles(){
		for(row = 0; row<8; row++){
			for(col = 0; col<8; col++){
				tileId  = tiles[col][row];
				tx = (tileId%8)*32;
				ty = Math.floor(tileId/8)*32;
				context.drawImage(im,tx,ty,32,32,row*32,col*32,32,32);
			}
		}
	
	}
		
},false);