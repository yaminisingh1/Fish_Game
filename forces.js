function Forces()
{ }

Forces.zeroforce=function(){
return new vector2D(0,0);
}


Forces.constantGravity=function(m,g){
return new vector2D(0,m*g);
}

Forces.gravitation=function(m1,m1,G,r){
return r.multiply(-(G*m1*m2/(r.length()*r.length()*r.length())));
}


Forces.linearDrag=function(vel,k){
var force=new vector2D(0,0);
length=vel.length();

if(length>0){
force=vel.multiply(-k);
console.log(length);
}
else{
force=new vector2D(0,0);
}
return force;
}

Forces.Drag=function(vel,k){
	var force=new vector2D(0,0);
	length=vel.length();
	if(length>0){
		force=vel.multiply(-k*length);
	}
	else{
		force=new vector2D(0,0);
	}
	return force;
}

Forces.add=function(arr){
var forcesum=new vector2D(0,0);
for(var i=0;i<arr.length;i++){
var force=arr[i];
forcesum.incrementBy(force);
}
return forcesum;
}

Forces.LIFT=function(k,vel){
	var f1=new vector2D(0,0);
	var len=vel.length();
	if(len>0){
		f1=vel.perpendicular(k*len,true);
	}
	else{
		f1=new vector2D(0,0);
	}
	return f1;
	console.log("f");
}

Forces.upthrust=function(rho,V,g){
	return new vector2D(0,-rho*V*g);
}

	
		
	
	
	
	
	

