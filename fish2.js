function FISH(mass,sw,sh){
	this.mass=mass;
	this.sw=sw;
	this.sh=sh;
	this.x=0;
	this.y=0;
	this.vx=0;
	this.vy=0;
	this.timer=0;
	this.head=new vector2D(this.x+35,this.y);
	this.tail=new vector2D(this.x-235,this.y);
	this.rotation=0;
}

FISH.prototype={

set pos2D(vec){
this.x=vec.x;
this.y=vec.y;
this.head=new vector2D(this.x+35,this.y);
	this.tail=new vector2D(this.x-235,this.y);
	} ,

get pos2D(){
return new  vector2D(this.x,this.y);
} ,

set velo2D(vec){
this.vx=vec.x;
this.vy=vec.y;
 } ,

get velo2D(){
return new  vector2D(this.vx,this.vy);
} ,

drawFish:function(context){
	context.beginPath();
	context.moveTo(this.head.x,this.head.y);
	context.lineTo(this.tail.x,this.tail.y);
	context.lineWidth=10;
	context.stroke();
	
	
	
	this.timer++;
	//HEAD
	/*context.beginPath();
	context.arc(this.head.x,this.head.y,10,0,2*Math.PI,false);
	context.fillStyle="green";
	context.fill();
	context.stroke();
	//TAIL
	context.beginPath();
	context.arc(this.tail.x,this.tail.y,10,0,2*Math.PI,false);
	context.fillStyle="green";
	context.fill();
	context.stroke();
	*/
}

}