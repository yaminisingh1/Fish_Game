function SHARK(mass,sw,sh){
	this.mass=mass;
	this.sw=sw;
	this.sh=sh;
	this.x=0;
	this.y=0;
	this.vx=0;
	this.vy=0;
	this.timer=0;
	this.head=new vector2D(this.x+45,this.y);
	this.tail=new vector2D(this.x-31,this.y);
	this.rotation=0;
}

SHARK.prototype={

set pos2D(vec){
this.x=vec.x;
this.y=vec.y;
this.head=new vector2D(this.x+45,this.y);
	this.tail=new vector2D(this.x-31,this.y);
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

drawShark:function(context){
	switch(this.timer%5){
		case 0: FrameShark_1(context,this.head.x,this.head.y,this.sw,this.sh);
		break;
		case 1: FrameShark_2(context,this.head.x,this.head.y,this.sw,this.sh);
		break;
		case 2: FrameShark_3(context,this.head.x,this.head.y,this.sw,this.sh);
		break;
		case 3: FrameShark_4(context,this.head.x,this.head.y,this.sw,this.sh);
		break;
		case 4: FrameShark_5(context,this.head.x,this.head.y,this.sw,this.sh);
		break;
		
	}
	this.timer++;
	//HEAD
	context.beginPath();
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
	
}

}