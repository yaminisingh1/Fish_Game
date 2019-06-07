function BALL(co,ra,ma,ch,grd){
if(typeof(co)==="undefined") co="pink";
if(typeof(ra)==="undefined") ra=40;
if(typeof(ma)==="undefined") ma=1;
if(typeof(ch)==="undefined") ch=1;
if(typeof(grd)==="undefined") grd=false;
this.x=140;
this.y=78;
this.vx=0;
this.vy=0;
this.co=co;
this.ra=ra;
this.ma=ma;
this.ch=ch;
this.grd=grd;
}


BALL.prototype={

set pos2D(vec){
this.x=vec.x;
this.y=vec.y; } ,

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


drawball:function(context){
if(this.grd==true){
var grad=context.createRadialGradient(this.x,this.y,0,this.x,this.y,this.ra);
grad.addColorStop(0,"white");

grad.addColorStop(1,this.co);
context.fillStyle=grad;
}
else{
context.fillStyle=this.co;
}
context.beginPath();
context.arc(this.x,this.y,this.ra,0,2*Math.PI,false);
context.stroke();
context.fill();
}
}