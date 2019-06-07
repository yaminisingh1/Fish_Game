alert("Vector.js");
function vector2D(x,y)
{this.x=x;
this.y=y;
}
vector2D.prototype={
	addscaled:function(velo,k)
	{
		return new vector2D(this.x+k*velo.x,this.y+velo.y*k);
	},
	length:function()
	{return Math.sqrt(this.x*this.x+this.y*this.y);
	},
	subtract:function(vec)
	{
		return new vector2D(this.x-vec.x,this.y-vec.y);
	},
	incrementBy:function(vec)
	{
		this.x=this.x+vec.x;
		this.y=this.y+vec.y;
	},
	multiply:function(k)
	{
		return new vector2D(this.x*k,this.y*k);
	},
	perpendicular:function(mag,anti)
	{
		if(anti==="undefined") anti=true;
		var per=new vector2D(0,0);
		if(anti==true)
		{
			per=new vector2D(this.y,-this.x);
		}
		else{
			per =new vector2D(-this.y,this.x);
		}
		var len=per.length();
		var prep=per.multiply(mag/len);
		return prep;
	},
	unit:function()
	{
		if(this.length()>0)
		{return this.multiply(1/this.length());
		}
		else
			return new vector2D(0,0);
		
}}
vector2D.xcomponent=function(mag,angle,anti)
{
	if(anti==true)
	{
		return new vector2D(mag*Math.cos(angle),0);
	}
	else
	{
		return new vector2D(mag*Math.cos(-angle),0);
}}
	vector2D.ycomponent=function(mag,angle,anti)
	{
	if(anti==false)
	{
		return new vector2D(0,mag*Math.sin(angle));
	}
	else{
		return new vector2D(0,mag*Math.sin(-angle));

	}
	}
	vector2D.reaction=function(mag,angle,anti)
	{
		if(anti==="undefined")anti=true;
		if(anti==true)
		{
			normal=new vector2D(mag*Math.cos(angle),-mag*Math.sin(angle));
		}
		else
		{
			normal=new vector2D(mag*Math.cos(angle),mag*Math.sin(angle));
		}
		return normal;
	}
	
	