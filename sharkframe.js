alert("SHARK");

function drawShark_tail_1(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 113*sw, yoff - 369*sh);
  ctx.bezierCurveTo(xoff - 123*sw, yoff - 361*sh, xoff - 149*sw, yoff - 339*sh, xoff - 162*sw, yoff - 317*sh);
  ctx.bezierCurveTo(xoff - 172*sw, yoff - 302*sh, xoff - 186*sw, yoff - 275*sh, xoff - 194*sw, yoff - 254*sh);
  ctx.bezierCurveTo(xoff - 206*sw, yoff - 241*sh, xoff - 225*sw, yoff - 209*sh, xoff - 232*sw, yoff - 188*sh);
  ctx.bezierCurveTo(xoff - 191*sw, yoff - 231*sh, xoff - 165*sw, yoff - 256*sh, xoff - 149*sw, yoff - 309*sh);
  ctx.bezierCurveTo(xoff - 148*sw, yoff - 251*sh, xoff - 214*sw, yoff - 135*sh, xoff - 220*sw, yoff - 149*sh);
  ctx.bezierCurveTo(xoff - 216*sw, yoff - 141*sh, xoff - 201*sw, yoff - 134*sh, xoff - 203*sw, yoff - 131*sh);
  ctx.bezierCurveTo(xoff - 181*sw, yoff - 130*sh, xoff - 183*sw, yoff - 112*sh, xoff - 160*sw, yoff - 136*sh);
  ctx.bezierCurveTo(xoff - 197*sw, yoff - 194*sh, xoff - 122*sw, yoff - 235*sh, xoff - 135*sw, yoff - 303*sh);
  ctx.bezierCurveTo(xoff - 127*sw, yoff - 310*sh, xoff - 115*sw, yoff - 318*sh, xoff - 114*sw, yoff - 367*sh);

ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}


function drawShark_middle_body_1(ctx, xoff, yoff, sw, sh, fi, st) {
  ctx.beginPath();
  ctx.moveTo(xoff - 232*sw, yoff - 188*sh);
  ctx.bezierCurveTo(xoff - 191*sw, yoff - 231*sh, xoff - 165*sw, yoff - 256*sh, xoff - 149*sw, yoff - 309*sh);
  ctx.bezierCurveTo(xoff - 148*sw, yoff - 251*sh, xoff - 214*sw, yoff - 135*sh, xoff - 220*sw, yoff - 149*sh);
  ctx.bezierCurveTo(xoff - 235*sw, yoff - 136*sh, xoff - 296*sw, yoff - 78*sh, xoff - 234*sw, yoff - 42*sh);
  ctx.bezierCurveTo(xoff - 232*sw, yoff - 18*sh, xoff - 224*sw, yoff - 0*sh, xoff - 227*sw, yoff - 11*sh);
  ctx.bezierCurveTo(xoff - 240*sw, yoff - 34*sh, xoff - 226*sw, yoff - 55*sh, xoff - 255*sw, yoff - 103*sh);
  ctx.bezierCurveTo(xoff - 250*sw, yoff - 150*sh, xoff - 145*sw, yoff - 34*sh, xoff - 158*sw, yoff - 42*sh);
  ctx.bezierCurveTo(xoff - 105*sw, yoff - 32*sh, xoff - 56*sw, yoff - 25*sh, xoff - 35*sw, yoff - 17*sh);
  ctx.bezierCurveTo(xoff - 16*sw, yoff - 28*sh, xoff - 15*sw, yoff - 43*sh, xoff - 6*sw, yoff - 53*sh);
  ctx.bezierCurveTo(3*sw + xoff, yoff - 43*sh, 31*sw + xoff, yoff - 21*sh, 31*sw + xoff, 3*sh + yoff);
  ctx.bezierCurveTo(85*sw + xoff, 22*sh + yoff, 172*sw + xoff, 44*sh + yoff, 198*sw + xoff, 79*sh + yoff);
  ctx.bezierCurveTo(189*sw + xoff, 92*sh + yoff, 186*sw + xoff, 109*sh + yoff, 136*sw + xoff, 117*sh + yoff);
  ctx.bezierCurveTo(110*sw + xoff, 132*sh + yoff, 77*sw + xoff, 123*sh + yoff, 57*sw + xoff, 133*sh + yoff);
  ctx.bezierCurveTo(42*sw + xoff, 135*sh + yoff, xoff - 6*sw, 114*sh + yoff, xoff - 20*sw, 124*sh + yoff);
  ctx.bezierCurveTo(xoff - 35*sw, 121*sh + yoff, xoff - 50*sw, 110*sh + yoff, xoff - 50*sw, 128*sh + yoff);
  ctx.bezierCurveTo(xoff - 57*sw, 117*sh + yoff, xoff - 81*sw, 154*sh + yoff, xoff - 90*sw, 158*sh + yoff);
  ctx.bezierCurveTo(xoff - 103*sw, 165*sh + yoff, xoff - 205*sw, 218*sh + yoff, xoff - 269*sw, 210*sh + yoff);
  ctx.bezierCurveTo(xoff - 283*sw, 208*sh + yoff, xoff - 302*sw, 200*sh + yoff, xoff - 292*sw, 183*sh + yoff);
  ctx.bezierCurveTo(xoff - 215*sw, 154*sh + yoff, xoff - 195*sw, 98*sh + yoff, xoff - 150*sw, 92*sh + yoff);
  ctx.bezierCurveTo(xoff - 172*sw, 79*sh + yoff, xoff - 179*sw, 84*sh + yoff, xoff - 209*sw, 78*sh + yoff);
  ctx.bezierCurveTo(xoff - 223*sw, 82*sh + yoff, xoff - 217*sw, 68*sh + yoff, xoff - 231*sw, 72*sh + yoff);
  ctx.bezierCurveTo(xoff - 245*sw, 62*sh + yoff, xoff - 244*sw, 63*sh + yoff, xoff - 262*sw, 57*sh + yoff);
  ctx.bezierCurveTo(xoff - 278*sw, 57*sh + yoff, xoff - 287*sw, 25*sh + yoff, xoff - 297*sw, 28*sh + yoff);
  ctx.bezierCurveTo(xoff - 321*sw, 31*sh + yoff, xoff - 317*sw, yoff - 4*sh, xoff - 347*sw, yoff - 24*sh);
  ctx.bezierCurveTo(xoff - 358*sw, yoff - 53*sh, xoff - 345*sw, yoff - 130*sh, xoff - 231*sw, yoff - 187*sh);
 
 ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}
function drawShark_bottom_1(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 213*sw, 128*sh + yoff);
  ctx.bezierCurveTo(xoff - 179*sw, 113*sh + yoff, xoff - 191*sw, 98*sh + yoff, xoff - 148*sw, 90*sh + yoff);
  ctx.bezierCurveTo(xoff - 168*sw, 82*sh + yoff, xoff - 179*sw, 84*sh + yoff, xoff - 209*sw, 78*sh + yoff);
  ctx.bezierCurveTo(xoff - 223*sw, 82*sh + yoff, xoff - 217*sw, 68*sh + yoff, xoff - 231*sw, 72*sh + yoff);
  ctx.bezierCurveTo(xoff - 245*sw, 62*sh + yoff, xoff - 244*sw, 63*sh + yoff, xoff - 262*sw, 57*sh + yoff);
  ctx.bezierCurveTo(xoff - 278*sw, 57*sh + yoff, xoff - 287*sw, 25*sh + yoff, xoff - 297*sw, 28*sh + yoff);
  ctx.bezierCurveTo(xoff - 321*sw, 31*sh + yoff, xoff - 317*sw, yoff - 4*sh, xoff - 347*sw, yoff - 24*sh);
  ctx.bezierCurveTo(xoff - 317*sw, 78*sh + yoff, xoff - 280*sw, 87*sh + yoff, xoff - 212*sw, 128*sh + yoff);

ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}
function drawShark_bottom_fin_1(ctx, xoff, yoff, sw, sh, fi, st) {

 
  ctx.beginPath();
  ctx.moveTo(xoff - 342*sw, yoff - 11*sh);
  ctx.bezierCurveTo(xoff - 349*sw, yoff - 5*sh, xoff - 353*sw, yoff - 16*sh, xoff - 361*sw, yoff - 12*sh);
  ctx.bezierCurveTo(xoff - 370*sw, yoff - 0*sh, xoff - 338*sw, 19*sh + yoff, xoff - 328*sw, 29*sh + yoff);
  ctx.bezierCurveTo(xoff - 329*sw, 17*sh + yoff, xoff - 339*sw, 13*sh + yoff, xoff - 342*sw, yoff - 12*sh);

ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}
function drawShark_bottom_face_1(ctx, xoff, yoff, sw, sh, fi, st) {
ctx.beginPath();
  ctx.moveTo(xoff - 88*sw, 159*sh + yoff);
  ctx.bezierCurveTo(xoff - 38*sw, 160*sh + yoff, xoff - 24*sw, 142*sh + yoff, 50*sw + xoff, 163*sh + yoff);
  ctx.bezierCurveTo(101*sw + xoff, 169*sh + yoff, 110*sw + xoff, 170*sh + yoff, 172*sw + xoff, 110*sh + yoff);
  ctx.bezierCurveTo(159*sw + xoff, 109*sh + yoff, 118*sw + xoff, 121*sh + yoff, 118*sw + xoff, 126*sh + yoff);
  ctx.bezierCurveTo(94*sw + xoff, 128*sh + yoff, 64*sw + xoff, 125*sh + yoff, 57*sw + xoff, 137*sh + yoff);
  ctx.bezierCurveTo(38*sw + xoff, 133*sh + yoff, 13*sw + xoff, 122*sh + yoff, xoff - 2*sw, 125*sh + yoff);
  ctx.bezierCurveTo(xoff - 7*sw, 126*sh + yoff, xoff - 46*sw, 112*sh + yoff, xoff - 47*sw, 125*sh + yoff);
  ctx.bezierCurveTo(xoff - 65*sw, 128*sh + yoff, xoff - 57*sw, 142*sh + yoff, xoff - 66*sw, 137*sh + yoff);
  ctx.bezierCurveTo(xoff - 74*sw, 141*sh + yoff, xoff - 83*sw, 149*sh + yoff, xoff - 89*sw, 159*sh + yoff);

ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}


function drawShark_eye_bottom_line_1(ctx, xoff, yoff, sw, sh, fi, st) {


  ctx.beginPath();
  ctx.moveTo(59*sw + xoff, 126*sh + yoff);
  ctx.bezierCurveTo(46*sw + xoff, 133*sh + yoff, 96*sw + xoff, 110*sh + yoff, 83*sw + xoff, 117*sh + yoff);
  ctx.bezierCurveTo(100*sw + xoff, 109*sh + yoff, 102*sw + xoff, 116*sh + yoff, 118*sw + xoff, 102*sh + yoff);
  ctx.bezierCurveTo(138*sw + xoff, 99*sh + yoff, 151*sw + xoff, 107*sh + yoff, 153*sw + xoff, 88*sh + yoff);


 ctx.stroke();


}
function drawShark_back_fin_1(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 314*sw, yoff - 125*sh);
  ctx.bezierCurveTo(xoff - 305*sw, yoff - 145*sh, xoff - 309*sw, yoff - 179*sh, xoff - 293*sw, yoff - 180*sh);
  ctx.bezierCurveTo(xoff - 285*sw, yoff - 175*sh, xoff - 287*sw, yoff - 154*sh, xoff - 277*sw, yoff - 153*sh);
  ctx.bezierCurveTo(xoff - 281*sw, yoff - 168*sh, xoff - 306*sw, yoff - 128*sh, xoff - 315*sw, yoff - 125*sh);

 ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 

}
function drawShark_front_line_1(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 1*sw, 59*sh + yoff);
  ctx.bezierCurveTo(xoff - 12*sw, 65*sh + yoff, xoff - 27*sw, 88*sh + yoff, xoff - 13*sw, 113*sh + yoff);
 
 ctx.stroke();

}
function drawShark_front_line_2(ctx, xoff, yoff, sw, sh, fi, st) {
 
 
  ctx.beginPath();
  ctx.moveTo(xoff - 35*sw, 57*sh + yoff);
  ctx.bezierCurveTo(xoff - 52*sw, 54*sh + yoff, xoff - 45*sw, 59*sh + yoff, xoff - 45*sw, 72*sh + yoff);
  ctx.bezierCurveTo(xoff - 45*sw, 57*sh + yoff, xoff - 54*sw, 110*sh + yoff, xoff - 46*sw, 110*sh + yoff);

 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 
}





function drawShark_front_line_3(ctx, xoff, yoff, sw, sh, fi, st) {
 

  
  ctx.beginPath();
  ctx.moveTo(xoff - 57*sw, 54*sh + yoff);
  ctx.bezierCurveTo(xoff - 63*sw, 40*sh + yoff, xoff - 60*sw, 89*sh + yoff, xoff - 66*sw, 75*sh + yoff);
  ctx.bezierCurveTo(xoff - 66*sw, 60*sh + yoff, xoff - 73*sw, 103*sh + yoff, xoff - 65*sw, 124*sh + yoff);

 ctx.stroke();

}

function drawShark_front_line_4(ctx, xoff, yoff, sw, sh, fi, st) {


  ctx.beginPath();
  ctx.moveTo(xoff - 79*sw, 56*sh + yoff);
  ctx.bezierCurveTo(xoff - 82*sw, 48*sh + yoff, xoff - 98*sw, 77*sh + yoff, xoff - 87*sw, 79*sh + yoff);
  ctx.bezierCurveTo(xoff - 96*sw, 90*sh + yoff, xoff - 81*sw, 108*sh + yoff, xoff - 82*sw, 119*sh + yoff);
   ctx.stroke();
 
}

function drawShark_eye(ctx, xoff, yoff, sw, sh, fi, st) {
  

  ctx.beginPath();
  ctx.moveTo(128*sw + xoff, 78*sh + yoff);
  ctx.bezierCurveTo(113*sw + xoff, 55*sh + yoff, 102*sw + xoff, 94*sh + yoff, 126*sw + xoff, 81*sh + yoff);

    ctx.stroke();
   ctx.fillStyle="#7b9095";
ctx.fill();
}


function drawShark_middle_line(ctx, xoff, yoff, sw, sh, fi, st) {


  ctx.beginPath();
  ctx.moveTo(xoff - 311*sw, yoff - 111*sh);
  ctx.bezierCurveTo(xoff - 281*sw, yoff - 29*sh, xoff - 243*sw, yoff - 12*sh, xoff - 215*sw, yoff - 0*sh);
  ctx.bezierCurveTo(xoff - 131*sw, 33*sh + yoff, xoff - 111*sw, 20*sh + yoff, xoff - 80*sw, 19*sh + yoff);
  ctx.bezierCurveTo(xoff - 28*sw, 12*sh + yoff, 40*sw + xoff, 50*sh + yoff, 55*sw + xoff, 55*sh + yoff);

    ctx.stroke();

}



function drawShark_tail_2(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 214*sw, yoff - 310*sh);
  ctx.bezierCurveTo(xoff - 226*sw, yoff - 246*sh, xoff - 279*sw, yoff - 189*sh, xoff - 287*sw, yoff - 201*sh);
  ctx.bezierCurveTo(xoff - 250*sw, yoff - 263*sh, xoff - 214*sw, yoff - 351*sh, xoff - 174*sw, yoff - 381*sh);
  ctx.bezierCurveTo(xoff - 155*sw, yoff - 380*sh, xoff - 176*sw, yoff - 354*sh, xoff - 175*sw, yoff - 329*sh);
  ctx.bezierCurveTo(xoff - 184*sw, yoff - 317*sh, xoff - 194*sw, yoff - 317*sh, xoff - 187*sw, yoff - 282*sh);
  ctx.bezierCurveTo(xoff - 193*sw, yoff - 261*sh, xoff - 218*sw, yoff - 227*sh, xoff - 221*sw, yoff - 202*sh);
  ctx.bezierCurveTo(xoff - 222*sw, yoff - 173*sh, xoff - 201*sw, yoff - 107*sh, xoff - 272*sw, yoff - 162*sh);
  ctx.bezierCurveTo(xoff - 244*sw, yoff - 176*sh, xoff - 206*sw, yoff - 267*sh, xoff - 214*sw, yoff - 308*sh);

ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}


function drawShark_middle_body_2(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 287*sw, yoff - 201*sh);
  ctx.bezierCurveTo(xoff - 257*sw, yoff - 223*sh, xoff - 214*sw, yoff - 283*sh, xoff - 209*sw, yoff - 312*sh);
  ctx.bezierCurveTo(xoff - 201*sw, yoff - 269*sh, xoff - 246*sw, yoff - 182*sh, xoff - 270*sw, yoff - 163*sh);
  ctx.bezierCurveTo(xoff - 311*sw, yoff - 171*sh, xoff - 297*sw, yoff - 34*sh, xoff - 241*sw, yoff - 5*sh);
  ctx.bezierCurveTo(xoff - 221*sw, yoff - 35*sh, xoff - 249*sw, yoff - 64*sh, xoff - 251*sw, yoff - 83*sh);
  ctx.bezierCurveTo(xoff - 264*sw, yoff - 91*sh, xoff - 234*sw, yoff - 125*sh, xoff - 157*sw, yoff - 27*sh);
  ctx.bezierCurveTo(xoff - 123*sw, yoff - 32*sh, xoff - 98*sw, yoff - 20*sh, xoff - 39*sw, yoff - 11*sh);
  ctx.bezierCurveTo(xoff - 35*sw, yoff - 17*sh, xoff - 22*sw, yoff - 36*sh, xoff - 7*sw, yoff - 35*sh);
  ctx.bezierCurveTo(xoff - 2*sw, yoff - 27*sh, 24*sw + xoff, yoff - 6*sh, 33*sw + xoff, 19*sh + yoff);
  ctx.bezierCurveTo(46*sw + xoff, 18*sh + yoff, 172*sw + xoff, 53*sh + yoff, 196*sw + xoff, 90*sh + yoff);
  ctx.bezierCurveTo(188*sw + xoff, 116*sh + yoff, 188*sw + xoff, 113*sh + yoff, 170*sw + xoff, 126*sh + yoff);
  ctx.bezierCurveTo(139*sw + xoff, 132*sh + yoff, 107*sw + xoff, 145*sh + yoff, 70*sw + xoff, 145*sh + yoff);
  ctx.bezierCurveTo(55*sw + xoff, 144*sh + yoff, 57*sw + xoff, 149*sh + yoff, 42*sw + xoff, 148*sh + yoff);
  ctx.bezierCurveTo(28*sw + xoff, 152*sh + yoff, 32*sw + xoff, 137*sh + yoff, 18*sw + xoff, 141*sh + yoff);
  ctx.bezierCurveTo(3*sw + xoff, 142*sh + yoff, 3*sw + xoff, 137*sh + yoff, xoff - 12*sw, 138*sh + yoff);
  ctx.bezierCurveTo(xoff - 26*sw, 133*sh + yoff, xoff - 63*sw, 122*sh + yoff, xoff - 105*sw, 172*sh + yoff);
  ctx.bezierCurveTo(xoff - 160*sw, 187*sh + yoff, xoff - 233*sw, 215*sh + yoff, xoff - 276*sw, 207*sh + yoff);
  ctx.bezierCurveTo(xoff - 308*sw, 194*sh + yoff, xoff - 306*sw, 177*sh + yoff, xoff - 295*sw, 171*sh + yoff);
  ctx.bezierCurveTo(xoff - 302*sw, 159*sh + yoff, xoff - 243*sw, 154*sh + yoff, xoff - 232*sw, 131*sh + yoff);
  ctx.bezierCurveTo(xoff - 204*sw, 117*sh + yoff, xoff - 175*sw, 81*sh + yoff, xoff - 164*sw, 95*sh + yoff);
  ctx.bezierCurveTo(xoff - 176*sw, 76*sh + yoff, xoff - 200*sw, 103*sh + yoff, xoff - 217*sw, 78*sh + yoff);
  ctx.bezierCurveTo(xoff - 231*sw, 83*sh + yoff, xoff - 235*sw, 62*sh + yoff, xoff - 249*sw, 67*sh + yoff);
  ctx.bezierCurveTo(xoff - 260*sw, 77*sh + yoff, xoff - 274*sw, 34*sh + yoff, xoff - 287*sw, 31*sh + yoff);
  ctx.bezierCurveTo(xoff - 299*sw, 40*sh + yoff, xoff - 303*sw, 1*sh + yoff, xoff - 315*sw, 10*sh + yoff);
  ctx.bezierCurveTo(xoff - 324*sw, 22*sh + yoff, xoff - 326*sw, yoff - 30*sh, xoff - 335*sw, yoff - 18*sh);
  ctx.bezierCurveTo(xoff - 347*sw, yoff - 31*sh, xoff - 355*sw, yoff - 48*sh, xoff - 366*sw, yoff - 53*sh);
  ctx.bezierCurveTo(xoff - 366*sw, yoff - 73*sh, xoff - 358*sw, yoff - 176*sh, xoff - 288*sw, yoff - 202*sh);
 
 ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}
function drawShark_bottom_2(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 223*sw, 126*sh + yoff);
  ctx.bezierCurveTo(xoff - 195*sw, 112*sh + yoff, xoff - 175*sw, 81*sh + yoff, xoff - 164*sw, 95*sh + yoff);
  ctx.bezierCurveTo(xoff - 176*sw, 76*sh + yoff, xoff - 200*sw, 103*sh + yoff, xoff - 217*sw, 78*sh + yoff);
  ctx.bezierCurveTo(xoff - 231*sw, 83*sh + yoff, xoff - 235*sw, 62*sh + yoff, xoff - 249*sw, 67*sh + yoff);
  ctx.bezierCurveTo(xoff - 260*sw, 77*sh + yoff, xoff - 274*sw, 34*sh + yoff, xoff - 287*sw, 31*sh + yoff);
  ctx.bezierCurveTo(xoff - 299*sw, 40*sh + yoff, xoff - 303*sw, 1*sh + yoff, xoff - 315*sw, 10*sh + yoff);
  ctx.bezierCurveTo(xoff - 324*sw, 22*sh + yoff, xoff - 326*sw, yoff - 30*sh, xoff - 335*sw, yoff - 18*sh);
  ctx.bezierCurveTo(xoff - 347*sw, yoff - 31*sh, xoff - 355*sw, yoff - 48*sh, xoff - 366*sw, yoff - 53*sh);
  ctx.bezierCurveTo(xoff - 371*sw, yoff - 28*sh, xoff - 355*sw, 74*sh + yoff, xoff - 222*sw, 125*sh + yoff);
 
ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}
function drawShark_bottom_fin_2(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 335*sw, 44*sh + yoff);
  ctx.bezierCurveTo(xoff - 353*sw, 20*sh + yoff, xoff - 361*sw, yoff - 5*sh, xoff - 365*sw, yoff - 16*sh);
  ctx.bezierCurveTo(xoff - 382*sw, yoff - 20*sh, xoff - 392*sw, yoff - 34*sh, xoff - 398*sw, yoff - 14*sh);
  ctx.bezierCurveTo(xoff - 394*sw, yoff - 1*sh, xoff - 366*sw, 22*sh + yoff, xoff - 335*sw, 42*sh + yoff);
 
ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}
function drawShark_bottom_face_2(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 107*sw, 172*sh + yoff);
  ctx.bezierCurveTo(xoff - 88*sw, 170*sh + yoff, 23*sw + xoff, 156*sh + yoff, 46*sw + xoff, 177*sh + yoff);
  ctx.bezierCurveTo(143*sw + xoff, 200*sh + yoff, 154*sw + xoff, 130*sh + yoff, 191*sw + xoff, 108*sh + yoff);
  ctx.bezierCurveTo(153*sw + xoff, 124*sh + yoff, 136*sw + xoff, 147*sh + yoff, 80*sw + xoff, 144*sh + yoff);
  ctx.bezierCurveTo(65*sw + xoff, 142*sh + yoff, 67*sw + xoff, 149*sh + yoff, 52*sw + xoff, 147*sh + yoff);
  ctx.bezierCurveTo(37*sw + xoff, 150*sh + yoff, 33*sw + xoff, 137*sh + yoff, 18*sw + xoff, 140*sh + yoff);
  ctx.bezierCurveTo(3*sw + xoff, 142*sh + yoff, xoff - 8*sw, 133*sh + yoff, xoff - 23*sw, 135*sh + yoff);
  ctx.bezierCurveTo(xoff - 38*sw, 132*sh + yoff, xoff - 65*sw, 130*sh + yoff, xoff - 107*sw, 171*sh + yoff);
 
ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}


function drawShark_eye_bottom_line_2(ctx, xoff, yoff, sw, sh, fi, st) {


  ctx.beginPath();
  ctx.moveTo(52*sw + xoff, 147*sh + yoff);
  ctx.bezierCurveTo(73*sw + xoff, 142*sh + yoff, 71*sw + xoff, 133*sh + yoff, 86*sw + xoff, 131*sh + yoff);
  ctx.bezierCurveTo(105*sw + xoff, 131*sh + yoff, 118*sw + xoff, 121*sh + yoff, 130*sw + xoff, 119*sh + yoff);
  ctx.bezierCurveTo(145*sw + xoff, 124*sh + yoff, 154*sw + xoff, 113*sh + yoff, 171*sw + xoff, 107*sh + yoff);


 ctx.stroke();


}
function drawShark_back_fin_2(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 343*sw, yoff - 147*sh);
  ctx.bezierCurveTo(xoff - 352*sw, yoff - 135*sh, xoff - 328*sw, yoff - 177*sh, xoff - 320*sw, yoff - 177*sh);
  ctx.bezierCurveTo(xoff - 331*sw, yoff - 167*sh, xoff - 337*sw, yoff - 186*sh, xoff - 341*sw, yoff - 195*sh);
  ctx.bezierCurveTo(xoff - 352*sw, yoff - 205*sh, xoff - 353*sw, yoff - 164*sh, xoff - 342*sw, yoff - 147*sh);

 ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 

}
function drawShark_front_line_2_1(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 1*sw, 59*sh + yoff);
  ctx.bezierCurveTo(xoff - 12*sw, 65*sh + yoff, xoff - 27*sw, 88*sh + yoff, xoff - 13*sw, 113*sh + yoff);
 
 ctx.stroke();

}
function drawShark_front_line_2_2(ctx, xoff, yoff, sw, sh, fi, st) {
 
 
  ctx.beginPath();
  ctx.moveTo(xoff - 35*sw, 57*sh + yoff);
  ctx.bezierCurveTo(xoff - 52*sw, 54*sh + yoff, xoff - 45*sw, 59*sh + yoff, xoff - 45*sw, 72*sh + yoff);
  ctx.bezierCurveTo(xoff - 45*sw, 57*sh + yoff, xoff - 54*sw, 110*sh + yoff, xoff - 46*sw, 110*sh + yoff);

 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 
}





function drawShark_front_line_2_3(ctx, xoff, yoff, sw, sh, fi, st) {
 

  
  ctx.beginPath();
  ctx.moveTo(xoff - 57*sw, 54*sh + yoff);
  ctx.bezierCurveTo(xoff - 63*sw, 40*sh + yoff, xoff - 60*sw, 89*sh + yoff, xoff - 66*sw, 75*sh + yoff);
  ctx.bezierCurveTo(xoff - 66*sw, 60*sh + yoff, xoff - 73*sw, 103*sh + yoff, xoff - 65*sw, 124*sh + yoff);

 ctx.stroke();

}

function drawShark_front_line_2_4(ctx, xoff, yoff, sw, sh, fi, st) {


  ctx.beginPath();
  ctx.moveTo(xoff - 79*sw, 56*sh + yoff);
  ctx.bezierCurveTo(xoff - 82*sw, 48*sh + yoff, xoff - 98*sw, 77*sh + yoff, xoff - 87*sw, 79*sh + yoff);
  ctx.bezierCurveTo(xoff - 96*sw, 90*sh + yoff, xoff - 81*sw, 108*sh + yoff, xoff - 82*sw, 119*sh + yoff);
   ctx.stroke();
 
}

function drawShark_eye(ctx, xoff, yoff, sw, sh, fi, st) {
  

  ctx.beginPath();
  ctx.moveTo(128*sw + xoff, 78*sh + yoff);
  ctx.bezierCurveTo(113*sw + xoff, 55*sh + yoff, 102*sw + xoff, 94*sh + yoff, 126*sw + xoff, 81*sh + yoff);

    ctx.stroke();
   ctx.fillStyle="#7b9095";
ctx.fill();
}


function drawShark_middle_line_2(ctx, xoff, yoff, sw, sh, fi, st) {


  
  ctx.beginPath();
  ctx.moveTo(xoff - 331*sw, yoff - 126*sh);
  ctx.bezierCurveTo(xoff - 336*sw, yoff - 55*sh, xoff - 304*sw, yoff - 18*sh, xoff - 271*sw, 9*sh + yoff);
  ctx.bezierCurveTo(xoff - 243*sw, 32*sh + yoff, xoff - 212*sw, 48*sh + yoff, xoff - 153*sw, 49*sh + yoff);
 
    ctx.stroke();

}
function drawShark_back_fin_right_2(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 291*sw, yoff - 113*sh);
  ctx.bezierCurveTo(xoff - 295*sw, yoff - 109*sh, xoff - 295*sw, yoff - 89*sh, xoff - 289*sw, yoff - 79*sh);
  ctx.bezierCurveTo(xoff - 299*sw, yoff - 68*sh, xoff - 263*sw, yoff - 102*sh, xoff - 262*sw, yoff - 127*sh);
  ctx.bezierCurveTo(xoff - 267*sw, yoff - 113*sh, xoff - 282*sw, yoff - 113*sh, xoff - 290*sw, yoff - 114*sh);

 ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 

}
function drawShark_bottom_portion_2(ctx, xoff, yoff, sw, sh, fi, st) {
  ctx.beginPath();
  ctx.moveTo(xoff - 366*sw, yoff - 56*sh);
  ctx.bezierCurveTo(xoff - 375*sw, yoff - 68*sh, xoff - 380*sw, 56*sh + yoff, xoff - 226*sw, 129*sh + yoff);
  ctx.bezierCurveTo(xoff - 210*sw, 129*sh + yoff, xoff - 202*sw, 99*sh + yoff, xoff - 164*sw, 92*sh + yoff);
  ctx.bezierCurveTo(xoff - 177*sw, 79*sh + yoff, xoff - 197*sw, 97*sh + yoff, xoff - 217*sw, 76*sh + yoff);
  ctx.bezierCurveTo(xoff - 231*sw, 82*sh + yoff, xoff - 229*sw, 58*sh + yoff, xoff - 243*sw, 64*sh + yoff);
  ctx.bezierCurveTo(xoff - 255*sw, 72*sh + yoff, xoff - 261*sw, 36*sh + yoff, xoff - 273*sw, 44*sh + yoff);
  ctx.bezierCurveTo(xoff - 284*sw, 54*sh + yoff, xoff - 287*sw, 10*sh + yoff, xoff - 298*sw, 20*sh + yoff);
  ctx.bezierCurveTo(xoff - 308*sw, 31*sh + yoff, xoff - 309*sw, yoff - 13*sh, xoff - 319*sw, yoff - 2*sh);
  ctx.bezierCurveTo(xoff - 328*sw, 10*sh + yoff, xoff - 340*sw, yoff - 55*sh, xoff - 349*sw, yoff - 43*sh);
  ctx.bezierCurveTo(xoff - 354*sw, yoff - 29*sh, xoff - 362*sw, yoff - 67*sh, xoff - 367*sw, yoff - 53*sh);
 ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 
}

function drawShark_tail_3(ctx, xoff, yoff, sw, sh, fi, st) {


  ctx.beginPath();
  ctx.moveTo(xoff - 520*sw, yoff - 87*sh);
  ctx.bezierCurveTo(xoff - 511*sw, yoff - 32*sh, xoff - 508*sw, yoff - 13*sh, xoff - 526*sw, 28*sh + yoff);
  ctx.bezierCurveTo(xoff - 535*sw, 63*sh + yoff, xoff - 584*sw, 97*sh + yoff, xoff - 583*sw, 121*sh + yoff);
  ctx.bezierCurveTo(xoff - 544*sw, 88*sh + yoff, xoff - 492*sw, 32*sh + yoff, xoff - 492*sw, 37*sh + yoff);
  ctx.bezierCurveTo(xoff - 504*sw, 45*sh + yoff, xoff - 476*sw, 13*sh + yoff, xoff - 447*sw, 7*sh + yoff);
  ctx.bezierCurveTo(xoff - 386*sw, 10*sh + yoff, xoff - 366*sw, 20*sh + yoff, xoff - 319*sw, 55*sh + yoff);
  ctx.bezierCurveTo(xoff - 280*sw, 78*sh + yoff, xoff - 242*sw, 108*sh + yoff, xoff - 208*sw, 111*sh + yoff);
  ctx.bezierCurveTo(xoff - 188*sw, 109*sh + yoff, xoff - 182*sw, 103*sh + yoff, xoff - 164*sw, 111*sh + yoff);
  ctx.bezierCurveTo(xoff - 176*sw, 102*sh + yoff, xoff - 203*sw, 131*sh + yoff, xoff - 216*sw, 153*sh + yoff);
  ctx.bezierCurveTo(xoff - 303*sw, 135*sh + yoff, xoff - 381*sw, 3*sh + yoff, xoff - 428*sw, 25*sh + yoff);
  ctx.bezierCurveTo(xoff - 456*sw, 18*sh + yoff, xoff - 553*sw, 142*sh + yoff, xoff - 567*sw, 148*sh + yoff);
  ctx.bezierCurveTo(xoff - 585*sw, 169*sh + yoff, xoff - 594*sw, 171*sh + yoff, xoff - 598*sw, 197*sh + yoff);
  ctx.bezierCurveTo(xoff - 618*sw, 194*sh + yoff, xoff - 615*sw, 158*sh + yoff, xoff - 610*sw, 147*sh + yoff);
  ctx.bezierCurveTo(xoff - 605*sw, 111*sh + yoff, xoff - 602*sw, 109*sh + yoff, xoff - 582*sw, 63*sh + yoff);
  ctx.bezierCurveTo(xoff - 497*sw, yoff - 35*sh, xoff - 535*sw, yoff - 48*sh, xoff - 547*sw, yoff - 103*sh);
  ctx.bezierCurveTo(xoff - 557*sw, yoff - 111*sh, xoff - 552*sw, yoff - 163*sh, xoff - 493*sw, yoff - 90*sh);
  ctx.bezierCurveTo(xoff - 483*sw, yoff - 86*sh, xoff - 458*sw, yoff - 41*sh, xoff - 437*sw, yoff - 38*sh);
  ctx.bezierCurveTo(xoff - 404*sw, yoff - 39*sh, xoff - 329*sw, yoff - 38*sh, xoff - 256*sw, yoff - 22*sh);
  ctx.bezierCurveTo(xoff - 254*sw, yoff - 24*sh, xoff - 239*sw, 2*sh + yoff, xoff - 249*sw, 5*sh + yoff);
  ctx.bezierCurveTo(xoff - 290*sw, 4*sh + yoff, xoff - 389*sw, yoff - 26*sh, xoff - 439*sw, yoff - 18*sh);
  ctx.bezierCurveTo(xoff - 474*sw, yoff - 23*sh, xoff - 495*sw, yoff - 39*sh, xoff - 520*sw, yoff - 89*sh);

ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}


function drawShark_middle_body_3(ctx, xoff, yoff, sw, sh, fi, st) {
 
  ctx.beginPath();
  ctx.moveTo(xoff - 453*sw, yoff - 19*sh);
  ctx.bezierCurveTo(xoff - 464*sw, yoff - 9*sh, xoff - 507*sw, yoff - 64*sh, xoff - 520*sw, yoff - 87*sh);
  ctx.bezierCurveTo(xoff - 511*sw, yoff - 32*sh, xoff - 508*sw, yoff - 13*sh, xoff - 526*sw, 28*sh + yoff);
  ctx.bezierCurveTo(xoff - 535*sw, 63*sh + yoff, xoff - 589*sw, 91*sh + yoff, xoff - 583*sw, 121*sh + yoff);
  ctx.bezierCurveTo(xoff - 544*sw, 88*sh + yoff, xoff - 492*sw, 32*sh + yoff, xoff - 492*sw, 37*sh + yoff);
  ctx.bezierCurveTo(xoff - 504*sw, 45*sh + yoff, xoff - 476*sw, 13*sh + yoff, xoff - 447*sw, 7*sh + yoff);
  ctx.bezierCurveTo(xoff - 386*sw, 10*sh + yoff, xoff - 366*sw, 20*sh + yoff, xoff - 319*sw, 55*sh + yoff);
  ctx.bezierCurveTo(xoff - 280*sw, 78*sh + yoff, xoff - 242*sw, 108*sh + yoff, xoff - 208*sw, 111*sh + yoff);
  ctx.bezierCurveTo(xoff - 188*sw, 109*sh + yoff, xoff - 182*sw, 103*sh + yoff, xoff - 164*sw, 111*sh + yoff);
  ctx.bezierCurveTo(xoff - 218*sw, 125*sh + yoff, xoff - 205*sw, 155*sh + yoff, xoff - 236*sw, 164*sh + yoff);
  ctx.bezierCurveTo(xoff - 265*sw, 185*sh + yoff, xoff - 307*sw, 187*sh + yoff, xoff - 308*sw, 207*sh + yoff);
  ctx.bezierCurveTo(xoff - 317*sw, 212*sh + yoff, xoff - 311*sw, 239*sh + yoff, xoff - 280*sw, 235*sh + yoff);
  ctx.bezierCurveTo(xoff - 283*sw, 236*sh + yoff, xoff - 279*sw, 263*sh + yoff, xoff - 119*sw, 196*sh + yoff);
  ctx.bezierCurveTo(xoff - 103*sw, 184*sh + yoff, xoff - 65*sw, 146*sh + yoff, xoff - 51*sw, 148*sh + yoff);
  ctx.bezierCurveTo(xoff - 66*sw, 149*sh + yoff, xoff - 28*sw, 123*sh + yoff, 29*sw + xoff, 140*sh + yoff);
  ctx.bezierCurveTo(77*sw + xoff, 137*sh + yoff, 61*sw + xoff, 133*sh + yoff, 96*sw + xoff, 115*sh + yoff);
  ctx.bezierCurveTo(108*sw + xoff, 114*sh + yoff, 131*sw + xoff, 100*sh + yoff, 174*sw + xoff, 102*sh + yoff);
  ctx.bezierCurveTo(218*sw + xoff, 48*sh + yoff, 37*sw + xoff, 11*sh + yoff, 15*sw + xoff, 18*sh + yoff);
  ctx.bezierCurveTo(7*sw + xoff, yoff - 10*sh, xoff - 20*sw, yoff - 49*sh, xoff - 29*sw, yoff - 37*sh);
  ctx.bezierCurveTo(xoff - 40*sw, yoff - 47*sh, xoff - 45*sw, yoff - 17*sh, xoff - 60*sw, yoff - 16*sh);
  ctx.bezierCurveTo(xoff - 79*sw, yoff - 10*sh, xoff - 140*sw, yoff - 46*sh, xoff - 174*sw, yoff - 23*sh);
  ctx.bezierCurveTo(xoff - 243*sw, yoff - 99*sh, xoff - 270*sw, yoff - 92*sh, xoff - 275*sw, yoff - 78*sh);
  ctx.bezierCurveTo(xoff - 278*sw, yoff - 71*sh, xoff - 246*sw, yoff - 38*sh, xoff - 258*sw, 7*sh + yoff);
  ctx.bezierCurveTo(xoff - 286*sw, yoff - 18*sh, xoff - 405*sw, yoff - 27*sh, xoff - 452*sw, yoff - 20*sh);
  
 ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}
function drawShark_front_bottom_3(ctx, xoff, yoff, sw, sh, fi, st) {


  ctx.beginPath();
  ctx.moveTo(181*sw + xoff, 98*sh + yoff);
  ctx.bezierCurveTo(154*sw + xoff, 102*sh + yoff, 140*sw + xoff, 166*sh + yoff, 80*sw + xoff, 170*sh + yoff);
  ctx.bezierCurveTo(36*sw + xoff, 175*sh + yoff, 19*sw + xoff, 157*sh + yoff, xoff - 14*sw, 170*sh + yoff);
  ctx.bezierCurveTo(xoff - 39*sw, 171*sh + yoff, xoff - 85*sw, 179*sh + yoff, xoff - 110*sw, 191*sh + yoff);
  ctx.bezierCurveTo(xoff - 70*sw, 171*sh + yoff, xoff - 60*sw, 119*sh + yoff, 22*sw + xoff, 139*sh + yoff);
  ctx.bezierCurveTo(27*sw + xoff, 136*sh + yoff, 72*sw + xoff, 145*sh + yoff, 85*sw + xoff, 121*sh + yoff);
  ctx.bezierCurveTo(89*sw + xoff, 121*sh + yoff, 102*sw + xoff, 108*sh + yoff, 114*sw + xoff, 118*sh + yoff);
  ctx.bezierCurveTo(135*sw + xoff, 119*sh + yoff, 152*sw + xoff, 118*sh + yoff, 177*sw + xoff, 99*sh + yoff);

ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}
function drawShark_bottom_fin_left_3(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 329*sw, 80*sh + yoff);
  ctx.bezierCurveTo(xoff - 318*sw, 91*sh + yoff, xoff - 290*sw, 115*sh + yoff, xoff - 278*sw, 122*sh + yoff);
  ctx.bezierCurveTo(xoff - 329*sw, 129*sh + yoff, xoff - 397*sw, 75*sh + yoff, xoff - 328*sw, 81*sh + yoff);
  
ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}
function drawShark_bottom_fin_right_3(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 373*sw, yoff - 35*sh);
  ctx.bezierCurveTo(xoff - 388*sw, yoff - 36*sh, xoff - 318*sw, yoff - 35*sh, xoff - 332*sw, yoff - 31*sh);
  ctx.bezierCurveTo(xoff - 389*sw, yoff - 100*sh, xoff - 402*sw, yoff - 53*sh, xoff - 373*sw, yoff - 35*sh);
  
ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}




function drawShark_front_line_3_1(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 1*sw, 59*sh + yoff);
  ctx.bezierCurveTo(xoff - 12*sw, 65*sh + yoff, xoff - 27*sw, 88*sh + yoff, xoff - 13*sw, 113*sh + yoff);
 
 ctx.stroke();

}
function drawShark_front_line_3_2(ctx, xoff, yoff, sw, sh, fi, st) {
 
 
  ctx.beginPath();
  ctx.moveTo(xoff - 35*sw, 57*sh + yoff);
  ctx.bezierCurveTo(xoff - 52*sw, 54*sh + yoff, xoff - 45*sw, 59*sh + yoff, xoff - 45*sw, 72*sh + yoff);
  ctx.bezierCurveTo(xoff - 45*sw, 57*sh + yoff, xoff - 54*sw, 110*sh + yoff, xoff - 46*sw, 110*sh + yoff);

 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 
}





function drawShark_front_line_3_3(ctx, xoff, yoff, sw, sh, fi, st) {
 

  
  ctx.beginPath();
  ctx.moveTo(xoff - 57*sw, 54*sh + yoff);
  ctx.bezierCurveTo(xoff - 63*sw, 40*sh + yoff, xoff - 60*sw, 89*sh + yoff, xoff - 66*sw, 75*sh + yoff);
  ctx.bezierCurveTo(xoff - 66*sw, 60*sh + yoff, xoff - 73*sw, 103*sh + yoff, xoff - 65*sw, 124*sh + yoff);

 ctx.stroke();

}

function drawShark_front_line_3_4(ctx, xoff, yoff, sw, sh, fi, st) {


  ctx.beginPath();
  ctx.moveTo(xoff - 79*sw, 56*sh + yoff);
  ctx.bezierCurveTo(xoff - 82*sw, 48*sh + yoff, xoff - 98*sw, 77*sh + yoff, xoff - 87*sw, 79*sh + yoff);
  ctx.bezierCurveTo(xoff - 96*sw, 90*sh + yoff, xoff - 81*sw, 108*sh + yoff, xoff - 82*sw, 119*sh + yoff);
   ctx.stroke();
 
}

function drawShark_eye(ctx, xoff, yoff, sw, sh, fi, st) {
  

  ctx.beginPath();
  ctx.moveTo(128*sw + xoff, 78*sh + yoff);
  ctx.bezierCurveTo(113*sw + xoff, 55*sh + yoff, 102*sw + xoff, 94*sh + yoff, 126*sw + xoff, 81*sh + yoff);

    ctx.stroke();
   ctx.fillStyle="#7b9095";
ctx.fill();
}


function drawShark_tail_4(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 565*sw, 212*sh + yoff);
  ctx.bezierCurveTo(xoff - 502*sw, 163*sh + yoff, xoff - 505*sw, 91*sh + yoff, xoff - 440*sw, 54*sh + yoff);
  ctx.bezierCurveTo(xoff - 399*sw, 34*sh + yoff, xoff - 390*sw, 29*sh + yoff, xoff - 360*sw, 39*sh + yoff);
  ctx.bezierCurveTo(xoff - 308*sw, 29*sh + yoff, xoff - 214*sw, 103*sh + yoff, xoff - 183*sw, 108*sh + yoff);
  ctx.bezierCurveTo(xoff - 198*sw, 109*sh + yoff, xoff - 230*sw, 123*sh + yoff, xoff - 249*sw, 130*sh + yoff);
  ctx.bezierCurveTo(xoff - 251*sw, 116*sh + yoff, xoff - 414*sw, yoff - 4*sh, xoff - 477*sw, 112*sh + yoff);
  ctx.bezierCurveTo(xoff - 462*sw, 131*sh + yoff, xoff - 486*sw, 167*sh + yoff, xoff - 500*sw, 162*sh + yoff);
  ctx.bezierCurveTo(xoff - 509*sw, 203*sh + yoff, xoff - 534*sw, 218*sh + yoff, xoff - 559*sw, 222*sh + yoff);
  ctx.bezierCurveTo(xoff - 570*sw, 233*sh + yoff, xoff - 572*sw, 237*sh + yoff, xoff - 591*sw, 238*sh + yoff);
  ctx.bezierCurveTo(xoff - 606*sw, 240*sh + yoff, xoff - 606*sw, 241*sh + yoff, xoff - 618*sw, 235*sh + yoff);
  ctx.bezierCurveTo(xoff - 618*sw, 222*sh + yoff, xoff - 599*sw, 219*sh + yoff, xoff - 587*sw, 210*sh + yoff);
  ctx.bezierCurveTo(xoff - 562*sw, 176*sh + yoff, xoff - 548*sw, 156*sh + yoff, xoff - 547*sw, 106*sh + yoff);
  ctx.bezierCurveTo(xoff - 542*sw, 62*sh + yoff, xoff - 556*sw, 62*sh + yoff, xoff - 543*sw, 37*sh + yoff);
  ctx.bezierCurveTo(xoff - 548*sw, 51*sh + yoff, xoff - 545*sw, yoff - 8*sh, xoff - 527*sw, yoff - 8*sh);
  ctx.bezierCurveTo(xoff - 535*sw, yoff - 21*sh, xoff - 509*sw, yoff - 5*sh, xoff - 517*sw, 15*sh + yoff);
  ctx.bezierCurveTo(xoff - 522*sw, 32*sh + yoff, xoff - 531*sw, 65*sh + yoff, xoff - 513*sw, 57*sh + yoff);
  ctx.bezierCurveTo(xoff - 468*sw, 24*sh + yoff, xoff - 403*sw, yoff - 63*sh, xoff - 196*sw, yoff - 30*sh);
  ctx.bezierCurveTo(xoff - 200*sw, yoff - 21*sh, xoff - 191*sw, yoff - 14*sh, xoff - 195*sw, yoff - 0*sh);
  ctx.bezierCurveTo(xoff - 232*sw, yoff - 16*sh, xoff - 343*sw, yoff - 67*sh, xoff - 515*sw, 78*sh + yoff);
  ctx.bezierCurveTo(xoff - 542*sw, 73*sh + yoff, xoff - 522*sw, 35*sh + yoff, xoff - 529*sw, 26*sh + yoff);
  ctx.bezierCurveTo(xoff - 548*sw, 122*sh + yoff, xoff - 484*sw, 75*sh + yoff, xoff - 559*sw, 208*sh + yoff);

ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}


function drawShark_middle_body_4(ctx, xoff, yoff, sw, sh, fi, st) {
 

  ctx.beginPath();
  ctx.moveTo(xoff - 535*sw, 26*sh + yoff);
  ctx.bezierCurveTo(xoff - 532*sw, 72*sh + yoff, xoff - 518*sw, 139*sh + yoff, xoff - 556*sw, 198*sh + yoff);
  ctx.bezierCurveTo(xoff - 506*sw, 163*sh + yoff, xoff - 505*sw, 91*sh + yoff, xoff - 440*sw, 54*sh + yoff);
  ctx.bezierCurveTo(xoff - 399*sw, 34*sh + yoff, xoff - 390*sw, 29*sh + yoff, xoff - 360*sw, 39*sh + yoff);
  ctx.bezierCurveTo(xoff - 308*sw, 29*sh + yoff, xoff - 217*sw, 102*sh + yoff, xoff - 183*sw, 108*sh + yoff);
  ctx.bezierCurveTo(xoff - 258*sw, 123*sh + yoff, xoff - 229*sw, 141*sh + yoff, xoff - 325*sw, 136*sh + yoff);
  ctx.bezierCurveTo(xoff - 328*sw, 136*sh + yoff, xoff - 366*sw, 166*sh + yoff, xoff - 332*sw, 178*sh + yoff);
  ctx.bezierCurveTo(xoff - 349*sw, 187*sh + yoff, xoff - 267*sw, 212*sh + yoff, xoff - 162*sw, 205*sh + yoff);
  ctx.bezierCurveTo(xoff - 141*sw, 195*sh + yoff, xoff - 90*sw, 190*sh + yoff, xoff - 84*sw, 192*sh + yoff);
  ctx.bezierCurveTo(xoff - 54*sw, 193*sh + yoff, xoff - 38*sw, 222*sh + yoff, 8*sw + xoff, 245*sh + yoff);
  ctx.bezierCurveTo(xoff - 6*sw, 241*sh + yoff, 67*sw + xoff, 262*sh + yoff, 53*sw + xoff, 258*sh + yoff);
  ctx.bezierCurveTo(61*sw + xoff, 260*sh + yoff, 106*sw + xoff, 268*sh + yoff, 122*sw + xoff, 268*sh + yoff);
  ctx.bezierCurveTo(139*sw + xoff, 266*sh + yoff, 165*sw + xoff, 249*sh + yoff, 156*sw + xoff, 237*sh + yoff);
  ctx.bezierCurveTo(143*sw + xoff, 212*sh + yoff, 97*sw + xoff, 165*sh + yoff, 83*sw + xoff, 160*sh + yoff);
  ctx.bezierCurveTo(65*sw + xoff, 135*sh + yoff, 39*sw + xoff, 120*sh + yoff, 24*sw + xoff, 112*sh + yoff);
  ctx.bezierCurveTo(20*sw + xoff, 74*sh + yoff, 8*sw + xoff, 44*sh + yoff, 4*sw + xoff, 50*sh + yoff);
  ctx.bezierCurveTo(xoff - 11*sw, 46*sh + yoff, xoff - 22*sw, 62*sh + yoff, xoff - 37*sw, 58*sh + yoff);
  ctx.bezierCurveTo(xoff - 59*sw, 37*sh + yoff, xoff - 115*sw, 5*sh + yoff, xoff - 133*sw, 7*sh + yoff);
  ctx.bezierCurveTo(xoff - 154*sw, yoff - 74*sh, xoff - 184*sw, yoff - 87*sh, xoff - 191*sw, yoff - 82*sh);
  ctx.bezierCurveTo(xoff - 212*sw, yoff - 82*sh, xoff - 185*sw, yoff - 24*sh, xoff - 195*sw, yoff - 14*sh);
  ctx.bezierCurveTo(xoff - 204*sw, yoff - 16*sh, xoff - 375*sw, yoff - 62*sh, xoff - 495*sw, 65*sh + yoff);
  ctx.bezierCurveTo(xoff - 508*sw, 76*sh + yoff, xoff - 513*sw, 112*sh + yoff, xoff - 535*sw, 24*sh + yoff);
  
 ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}
function drawShark_front_bottom_4(ctx, xoff, yoff, sw, sh, fi, st) {
  ctx.beginPath();
  ctx.moveTo(xoff - 158*sw, 207*sh + yoff);
  ctx.bezierCurveTo(xoff - 146*sw, 197*sh + yoff, xoff - 111*sw, 185*sh + yoff, xoff - 76*sw, 194*sh + yoff);
  ctx.bezierCurveTo(xoff - 69*sw, 194*sh + yoff, xoff - 14*sw, 235*sh + yoff, xoff - 3*sw, 237*sh + yoff);
  ctx.bezierCurveTo(xoff - 17*sw, 231*sh + yoff, 49*sw + xoff, 256*sh + yoff, 34*sw + xoff, 253*sh + yoff);
  ctx.bezierCurveTo(20*sw + xoff, 249*sh + yoff, 96*sw + xoff, 267*sh + yoff, 82*sw + xoff, 263*sh + yoff);
  ctx.bezierCurveTo(86*sw + xoff, 265*sh + yoff, 109*sw + xoff, 258*sh + yoff, 118*sw + xoff, 270*sh + yoff);
  ctx.bezierCurveTo(100*sw + xoff, 277*sh + yoff, 85*sw + xoff, 294*sh + yoff, 60*sw + xoff, 292*sh + yoff);
  ctx.bezierCurveTo(xoff - 26*sw, 294*sh + yoff, xoff - 48*sw, 232*sh + yoff, xoff - 70*sw, 234*sh + yoff);
  ctx.bezierCurveTo(xoff - 93*sw, 223*sh + yoff, xoff - 144*sw, 207*sh + yoff, xoff - 159*sw, 208*sh + yoff);
 
ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}
function drawShark_bottom_fin_left_4(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 400*sw, 59*sh + yoff);
  ctx.bezierCurveTo(xoff - 377*sw, 56*sh + yoff, xoff - 360*sw, 57*sh + yoff, xoff - 348*sw, 65*sh + yoff);
  ctx.bezierCurveTo(xoff - 355*sw, 87*sh + yoff, xoff - 402*sw, 93*sh + yoff, xoff - 426*sw, 93*sh + yoff);
  ctx.bezierCurveTo(xoff - 421*sw, 79*sh + yoff, xoff - 382*sw, 78*sh + yoff, xoff - 400*sw, 59*sh + yoff);

ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}
function drawShark_bottom_fin_right_4(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 394*sw, yoff - 18*sh);
  ctx.bezierCurveTo(xoff - 379*sw, yoff - 24*sh, xoff - 366*sw, yoff - 31*sh, xoff - 348*sw, yoff - 30*sh);
  ctx.bezierCurveTo(xoff - 358*sw, yoff - 49*sh, xoff - 407*sw, yoff - 59*sh, xoff - 421*sw, yoff - 53*sh);
  ctx.bezierCurveTo(xoff - 407*sw, yoff - 34*sh, xoff - 385*sw, yoff - 32*sh, xoff - 393*sw, yoff - 19*sh);

ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}




function drawShark_front_line_4_1(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 17*sw, 144*sh + yoff);
  ctx.bezierCurveTo(xoff - 24*sw, 151*sh + yoff, xoff - 34*sw, 164*sh + yoff, xoff - 39*sw, 178*sh + yoff);
  ctx.bezierCurveTo(xoff - 44*sw, 180*sh + yoff, xoff - 40*sw, 212*sh + yoff, xoff - 43*sw, 197*sh + yoff);

 ctx.stroke();

}
function drawShark_front_line_4_2(ctx, xoff, yoff, sw, sh, fi, st) {
  ctx.beginPath();
  ctx.moveTo(xoff - 43*sw, 140*sh + yoff);
  ctx.bezierCurveTo(xoff - 52*sw, 138*sh + yoff, xoff - 52*sw, 150*sh + yoff, xoff - 59*sw, 158*sh + yoff);
  ctx.bezierCurveTo(xoff - 66*sw, 170*sh + yoff, xoff - 66*sw, 174*sh + yoff, xoff - 69*sw, 182*sh + yoff);

 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 
}

function drawShark_front_line_4_3(ctx, xoff, yoff, sw, sh, fi, st) {
 ctx.beginPath();
  ctx.moveTo(xoff - 68*sw, 122*sh + yoff);
  ctx.bezierCurveTo(xoff - 79*sw, 127*sh + yoff, xoff - 89*sw, 134*sh + yoff, xoff - 88*sw, 154*sh + yoff);
  ctx.bezierCurveTo(xoff - 85*sw, 151*sh + yoff, xoff - 95*sw, 161*sh + yoff, xoff - 90*sw, 178*sh + yoff);
 
 ctx.stroke();

}

function drawShark_front_line_4_4(ctx, xoff, yoff, sw, sh, fi, st) {
ctx.beginPath();
  ctx.moveTo(xoff - 81*sw, 114*sh + yoff);
  ctx.bezierCurveTo(xoff - 97*sw, 129*sh + yoff, xoff - 110*sw, 144*sh + yoff, xoff - 110*sw, 169*sh + yoff);

   ctx.stroke();
 
}

function drawShark_eye_4(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(98*sw + xoff, 227*sh + yoff);
  ctx.bezierCurveTo(99*sw + xoff, 191*sh + yoff, 61*sw + xoff, 222*sh + yoff, 98*sw + xoff, 226*sh + yoff);

    ctx.stroke();
   ctx.fillStyle="#7b9095";
ctx.fill();
}

function drawShark_eye_bottom_line(ctx, xoff, yoff, sw, sh, fi, st) {
  ctx.beginPath();
  ctx.moveTo(21*sw + xoff, 248*sh + yoff);
  ctx.bezierCurveTo(16*sw + xoff, 247*sh + yoff, 38*sw + xoff, 232*sh + yoff, 42*sw + xoff, 240*sh + yoff);
  ctx.bezierCurveTo(58*sw + xoff, 247*sh + yoff, 60*sw + xoff, 246*sh + yoff, 73*sw + xoff, 245*sh + yoff);
  ctx.bezierCurveTo(82*sw + xoff, 240*sh + yoff, 89*sw + xoff, 242*sh + yoff, 98*sw + xoff, 251*sh + yoff);
  ctx.bezierCurveTo(105*sw + xoff, 258*sh + yoff, 126*sw + xoff, 254*sh + yoff, 122*sw + xoff, 251*sh + yoff);

    ctx.stroke();
  
}

function drawShark_tail_5(ctx, xoff, yoff, sw, sh, fi, st) {


  ctx.beginPath();
  ctx.moveTo(xoff - 582*sw, 258*sh + yoff);
  ctx.bezierCurveTo(xoff - 559*sw, 253*sh + yoff, xoff - 550*sw, 251*sh + yoff, xoff - 542*sw, 234*sh + yoff);
  ctx.bezierCurveTo(xoff - 531*sw, 211*sh + yoff, xoff - 526*sw, 197*sh + yoff, xoff - 511*sw, 190*sh + yoff);
  ctx.bezierCurveTo(xoff - 500*sw, 183*sh + yoff, xoff - 488*sw, 173*sh + yoff, xoff - 488*sw, 142*sh + yoff);
  ctx.bezierCurveTo(xoff - 476*sw, 127*sh + yoff, xoff - 464*sw, 89*sh + yoff, xoff - 385*sw, 82*sh + yoff);
  ctx.bezierCurveTo(xoff - 287*sw, 78*sh + yoff, xoff - 282*sw, 130*sh + yoff, xoff - 215*sw, 138*sh + yoff);
  ctx.bezierCurveTo(xoff - 231*sw, 143*sh + yoff, xoff - 232*sw, 153*sh + yoff, xoff - 272*sw, 156*sh + yoff);
  ctx.bezierCurveTo(xoff - 312*sw, 136*sh + yoff, xoff - 417*sw, 43*sh + yoff, xoff - 468*sw, 147*sh + yoff);
  ctx.bezierCurveTo(xoff - 473*sw, 157*sh + yoff, xoff - 485*sw, 201*sh + yoff, xoff - 514*sw, 214*sh + yoff);
  ctx.bezierCurveTo(xoff - 527*sw, 241*sh + yoff, xoff - 541*sw, 259*sh + yoff, xoff - 570*sw, 268*sh + yoff);
  ctx.bezierCurveTo(xoff - 589*sw, 286*sh + yoff, xoff - 626*sw, 296*sh + yoff, xoff - 635*sw, 280*sh + yoff);
  ctx.bezierCurveTo(xoff - 641*sw, 277*sh + yoff, xoff - 624*sw, 260*sh + yoff, xoff - 607*sw, 260*sh + yoff);
  ctx.bezierCurveTo(xoff - 582*sw, 239*sh + yoff, xoff - 568*sw, 212*sh + yoff, xoff - 561*sw, 174*sh + yoff);
  ctx.bezierCurveTo(xoff - 563*sw, 189*sh + yoff, xoff - 555*sw, 150*sh + yoff, xoff - 555*sw, 115*sh + yoff);
  ctx.bezierCurveTo(xoff - 550*sw, 68*sh + yoff, xoff - 567*sw, 46*sh + yoff, xoff - 544*sw, 35*sh + yoff);
  ctx.bezierCurveTo(xoff - 531*sw, 22*sh + yoff, xoff - 495*sw, 29*sh + yoff, xoff - 524*sw, 87*sh + yoff);
  ctx.bezierCurveTo(xoff - 527*sw, 89*sh + yoff, xoff - 519*sw, 121*sh + yoff, xoff - 512*sw, 107*sh + yoff);
  ctx.bezierCurveTo(xoff - 446*sw, 60*sh + yoff, xoff - 431*sw, yoff - 15*sh, xoff - 214*sw, 6*sh + yoff);
  ctx.bezierCurveTo(xoff - 207*sw, 10*sh + yoff, xoff - 203*sw, 30*sh + yoff, xoff - 206*sw, 42*sh + yoff);
  ctx.bezierCurveTo(xoff - 217*sw, 28*sh + yoff, xoff - 362*sw, yoff - 33*sh, xoff - 522*sw, 141*sh + yoff);
  ctx.bezierCurveTo(xoff - 543*sw, 160*sh + yoff, xoff - 528*sw, 64*sh + yoff, xoff - 540*sw, 66*sh + yoff);
  ctx.bezierCurveTo(xoff - 542*sw, 148*sh + yoff, xoff - 541*sw, 210*sh + yoff, xoff - 582*sw, 256*sh + yoff);

ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}


function drawShark_middle_body_5(ctx, xoff, yoff, sw, sh, fi, st) {
 

  ctx.beginPath();
  ctx.moveTo(xoff - 536*sw, 66*sh + yoff);
  ctx.bezierCurveTo(xoff - 547*sw, 116*sh + yoff, xoff - 526*sw, 181*sh + yoff, xoff - 576*sw, 255*sh + yoff);
  ctx.bezierCurveTo(xoff - 562*sw, 258*sh + yoff, xoff - 550*sw, 251*sh + yoff, xoff - 542*sw, 234*sh + yoff);
  ctx.bezierCurveTo(xoff - 531*sw, 211*sh + yoff, xoff - 526*sw, 197*sh + yoff, xoff - 511*sw, 190*sh + yoff);
  ctx.bezierCurveTo(xoff - 500*sw, 183*sh + yoff, xoff - 488*sw, 173*sh + yoff, xoff - 488*sw, 142*sh + yoff);
  ctx.bezierCurveTo(xoff - 476*sw, 127*sh + yoff, xoff - 464*sw, 89*sh + yoff, xoff - 385*sw, 82*sh + yoff);
  ctx.bezierCurveTo(xoff - 287*sw, 78*sh + yoff, xoff - 282*sw, 130*sh + yoff, xoff - 215*sw, 138*sh + yoff);
  ctx.bezierCurveTo(xoff - 231*sw, 143*sh + yoff, xoff - 288*sw, 169*sh + yoff, xoff - 345*sw, 174*sh + yoff);
  ctx.bezierCurveTo(xoff - 356*sw, 183*sh + yoff, xoff - 350*sw, 194*sh + yoff, xoff - 333*sw, 204*sh + yoff);
  ctx.bezierCurveTo(xoff - 338*sw, 212*sh + yoff, xoff - 267*sw, 241*sh + yoff, xoff - 168*sw, 209*sh + yoff);
  ctx.bezierCurveTo(xoff - 146*sw, 213*sh + yoff, xoff - 128*sw, 209*sh + yoff, xoff - 115*sw, 197*sh + yoff);
  ctx.bezierCurveTo(xoff - 104*sw, 192*sh + yoff, xoff - 97*sw, 184*sh + yoff, xoff - 88*sw, 192*sh + yoff);
  ctx.bezierCurveTo(xoff - 66*sw, 190*sh + yoff, xoff - 34*sw, 221*sh + yoff, xoff - 0*sw, 231*sh + yoff);
  ctx.bezierCurveTo(28*sw + xoff, 239*sh + yoff, 76*sw + xoff, 244*sh + yoff, 102*sw + xoff, 245*sh + yoff);
  ctx.bezierCurveTo(123*sw + xoff, 225*sh + yoff, 141*sw + xoff, 238*sh + yoff, 145*sw + xoff, 219*sh + yoff);
  ctx.bezierCurveTo(123*sw + xoff, 169*sh + yoff, 70*sw + xoff, 147*sh + yoff, 21*sw + xoff, 102*sh + yoff);
  ctx.bezierCurveTo(20*sw + xoff, 55*sh + yoff, xoff - 1*sw, 31*sh + yoff, xoff - 7*sw, 45*sh + yoff);
  ctx.bezierCurveTo(xoff - 22*sw, 53*sh + yoff, xoff - 17*sw, 73*sh + yoff, xoff - 28*sw, 63*sh + yoff);
  ctx.bezierCurveTo(xoff - 41*sw, 70*sh + yoff, xoff - 136*sw, yoff - 3*sh, xoff - 149*sw, 4*sh + yoff);
  ctx.bezierCurveTo(xoff - 167*sw, yoff - 8*sh, xoff - 197*sw, yoff - 71*sh, xoff - 214*sw, yoff - 46*sh);
  ctx.bezierCurveTo(xoff - 227*sw, yoff - 27*sh, xoff - 202*sw, 6*sh + yoff, xoff - 212*sw, 23*sh + yoff);
  ctx.bezierCurveTo(xoff - 226*sw, 18*sh + yoff, xoff - 388*sw, yoff - 10*sh, xoff - 499*sw, 125*sh + yoff);
  ctx.bezierCurveTo(xoff - 507*sw, 138*sh + yoff, xoff - 532*sw, 168*sh + yoff, xoff - 535*sw, 65*sh + yoff);

 ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}
function drawShark_front_bottom_5(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 152*sw, 213*sh + yoff);
  ctx.bezierCurveTo(xoff - 136*sw, 200*sh + yoff, xoff - 127*sw, 196*sh + yoff, xoff - 103*sw, 193*sh + yoff);
  ctx.bezierCurveTo(xoff - 82*sw, 182*sh + yoff, xoff - 51*sw, 200*sh + yoff, xoff - 12*sw, 223*sh + yoff);
  ctx.bezierCurveTo(xoff - 11*sw, 236*sh + yoff, 68*sw + xoff, 244*sh + yoff, 105*sw + xoff, 243*sh + yoff);
  ctx.bezierCurveTo(89*sw + xoff, 258*sh + yoff, 42*sw + xoff, 277*sh + yoff, 17*sw + xoff, 271*sh + yoff);
  ctx.bezierCurveTo(2*sw + xoff, 274*sh + yoff, xoff - 80*sw, 209*sh + yoff, xoff - 152*sw, 214*sh + yoff);

ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}
function drawShark_bottom_fin_left_5(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 388*sw, 100*sh + yoff);
  ctx.bezierCurveTo(xoff - 380*sw, 95*sh + yoff, xoff - 360*sw, 103*sh + yoff, xoff - 350*sw, 112*sh + yoff);
  ctx.bezierCurveTo(xoff - 364*sw, 125*sh + yoff, xoff - 377*sw, 128*sh + yoff, xoff - 409*sw, 127*sh + yoff);
  ctx.bezierCurveTo(xoff - 384*sw, 118*sh + yoff, xoff - 397*sw, 110*sh + yoff, xoff - 388*sw, 99*sh + yoff);
  
ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}
function drawShark_bottom_fin_right_5(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 411*sw, 37*sh + yoff);
  ctx.bezierCurveTo(xoff - 399*sw, 25*sh + yoff, xoff - 374*sw, 13*sh + yoff, xoff - 361*sw, 14*sh + yoff);
  ctx.bezierCurveTo(xoff - 393*sw, yoff - 9*sh, xoff - 430*sw, 1*sh + yoff, xoff - 445*sw, 3*sh + yoff);
  ctx.bezierCurveTo(xoff - 425*sw, 22*sh + yoff, xoff - 411*sw, 6*sh + yoff, xoff - 410*sw, 38*sh + yoff);

ctx.strokeStyle="#00bfff";
 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 


}




function drawShark_front_line_5_1(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(xoff - 17*sw, 144*sh + yoff);
  ctx.bezierCurveTo(xoff - 24*sw, 151*sh + yoff, xoff - 34*sw, 164*sh + yoff, xoff - 39*sw, 178*sh + yoff);
  ctx.bezierCurveTo(xoff - 44*sw, 180*sh + yoff, xoff - 40*sw, 212*sh + yoff, xoff - 43*sw, 197*sh + yoff);

 ctx.stroke();

}
function drawShark_front_line_5_2(ctx, xoff, yoff, sw, sh, fi, st) {
  ctx.beginPath();
  ctx.moveTo(xoff - 43*sw, 140*sh + yoff);
  ctx.bezierCurveTo(xoff - 52*sw, 138*sh + yoff, xoff - 52*sw, 150*sh + yoff, xoff - 59*sw, 158*sh + yoff);
  ctx.bezierCurveTo(xoff - 66*sw, 170*sh + yoff, xoff - 66*sw, 174*sh + yoff, xoff - 69*sw, 182*sh + yoff);

 ctx.stroke();
  ctx.fillStyle="#40a4df";
ctx.fill(); 
}

function drawShark_front_line_5_3(ctx, xoff, yoff, sw, sh, fi, st) {
 ctx.beginPath();
  ctx.moveTo(xoff - 68*sw, 122*sh + yoff);
  ctx.bezierCurveTo(xoff - 79*sw, 127*sh + yoff, xoff - 89*sw, 134*sh + yoff, xoff - 88*sw, 154*sh + yoff);
  ctx.bezierCurveTo(xoff - 85*sw, 151*sh + yoff, xoff - 95*sw, 161*sh + yoff, xoff - 90*sw, 178*sh + yoff);
 
 ctx.stroke();

}

function drawShark_front_line_5_4(ctx, xoff, yoff, sw, sh, fi, st) {
ctx.beginPath();
  ctx.moveTo(xoff - 81*sw, 114*sh + yoff);
  ctx.bezierCurveTo(xoff - 97*sw, 129*sh + yoff, xoff - 110*sw, 144*sh + yoff, xoff - 110*sw, 169*sh + yoff);

   ctx.stroke();
 
}

function drawShark_eye_5(ctx, xoff, yoff, sw, sh, fi, st) {

  ctx.beginPath();
  ctx.moveTo(98*sw + xoff, 227*sh + yoff);
  ctx.bezierCurveTo(99*sw + xoff, 191*sh + yoff, 61*sw + xoff, 222*sh + yoff, 98*sw + xoff, 226*sh + yoff);

    ctx.stroke();
   ctx.fillStyle="#7b9095";
ctx.fill();
}

function drawShark_eye_bottom_line_5(ctx, xoff, yoff, sw, sh, fi, st) {
 
  ctx.beginPath();
  ctx.moveTo(xoff - 5*sw, 229*sh + yoff);
  ctx.bezierCurveTo(xoff - 20*sw, 232*sh + yoff, 44*sw + xoff, 222*sh + yoff, 29*sw + xoff, 225*sh + yoff);
  ctx.bezierCurveTo(14*sw + xoff, 223*sh + yoff, 76*sw + xoff, 228*sh + yoff, 61*sw + xoff, 226*sh + yoff);
  ctx.bezierCurveTo(46*sw + xoff, 225*sh + yoff, 104*sw + xoff, 229*sh + yoff, 89*sw + xoff, 228*sh + yoff);
  ctx.bezierCurveTo(74*sw + xoff, 228*sh + yoff, 124*sw + xoff, 228*sh + yoff, 109*sw + xoff, 228*sh + yoff);

    ctx.stroke();
  
}






function FrameShark_5(ctx, xoff, yoff, sw, sh, fi, st){
drawShark_tail_5(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_middle_body_5(ctx, xoff, yoff, sw, sh, fi, st);
 drawShark_front_bottom_5(ctx, xoff, yoff, sw, sh, fi, st);
 drawShark_bottom_fin_left_5(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_bottom_fin_right_5(ctx, xoff, yoff, sw, sh, fi, st);
 drawShark_front_line_5_1(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_front_line_5_2(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_front_line_5_3(ctx, xoff, yoff, sw, sh, fi, st);
 drawShark_front_line_5_4(ctx, xoff, yoff, sw, sh, fi, st);
 drawShark_eye_5(ctx, xoff, yoff, sw, sh, fi, st) ;
drawShark_eye_bottom_line_5(ctx, xoff, yoff, sw, sh, fi, st); 
}


function FrameShark_4(ctx, xoff, yoff, sw, sh, fi, st){

drawShark_tail_4(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_middle_body_4(ctx, xoff, yoff, sw, sh, fi, st) ;
drawShark_front_bottom_4(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_bottom_fin_left_4(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_bottom_fin_right_4(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_front_line_4_1(ctx, xoff, yoff, sw, sh, fi, st);
 drawShark_front_line_4_2(ctx, xoff, yoff, sw, sh, fi, st);
 drawShark_front_line_4_3(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_front_line_4_4(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_eye_4(ctx, xoff, yoff, sw, sh, fi, st) ;  
 drawShark_eye_bottom_line(ctx, xoff, yoff, sw, sh, fi, st);

}
function FrameShark_3(ctx, xoff, yoff, sw, sh, fi, st){

drawShark_tail_3(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_middle_body_3(ctx, xoff, yoff, sw, sh, fi, st) ;
drawShark_front_bottom_3(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_bottom_fin_left_3(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_bottom_fin_right_3(ctx, xoff, yoff, sw, sh, fi, st); 
drawShark_eye(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_front_line_3_1(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_front_line_3_2(ctx, xoff, yoff, sw, sh, fi, st) ;
 drawShark_front_line_3_3(ctx, xoff, yoff, sw, sh, fi, st);
 drawShark_front_line_3_4(ctx, xoff, yoff, sw, sh, fi, st) ; 
}

function FrameShark_2(ctx, xoff, yoff, sw, sh, fi, st){
drawShark_tail_2(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_middle_body_2(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_bottom_2(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_bottom_fin_2(ctx, xoff, yoff, sw, sh, fi, st); 
drawShark_bottom_face_2(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_eye_bottom_line_2(ctx, xoff, yoff, sw, sh, fi, st);
 drawShark_back_fin_2(ctx, xoff, yoff, sw, sh, fi, st); 
drawShark_front_line_2_1(ctx, xoff, yoff, sw, sh, fi, st);
 drawShark_front_line_2_2(ctx, xoff, yoff, sw, sh, fi, st) ;
drawShark_front_line_2_3(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_front_line_2_4(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_eye(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_middle_line_2(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_back_fin_right_2(ctx, xoff, yoff, sw, sh, fi, st);
 drawShark_bottom_portion_2(ctx, xoff, yoff, sw, sh, fi, st);
}
function FrameShark_1(ctx, xoff, yoff, sw, sh, fi, st){
 drawShark_tail_1(ctx, xoff, yoff, sw, sh, fi, st) ;
drawShark_middle_body_1(ctx, xoff, yoff, sw, sh, fi, st) ;
drawShark_bottom_1(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_bottom_fin_1(ctx, xoff, yoff, sw, sh, fi, st); 
drawShark_bottom_face_1(ctx, xoff, yoff, sw, sh, fi, st) ;
drawShark_eye_bottom_line_1(ctx, xoff, yoff, sw, sh, fi, st) ;
 drawShark_back_fin_1(ctx, xoff, yoff, sw, sh, fi, st) ;
drawShark_front_line_1(ctx, xoff, yoff, sw, sh, fi, st);
drawShark_front_line_2(ctx, xoff, yoff, sw, sh, fi, st) ;
 drawShark_front_line_3(ctx, xoff, yoff, sw, sh, fi, st);
 drawShark_front_line_4(ctx, xoff, yoff, sw, sh, fi, st) ;
drawShark_eye(ctx, xoff, yoff, sw, sh, fi, st) ;
drawShark_middle_line(ctx, xoff, yoff, sw, sh, fi, st);

}


//FrameShark_5();

//FrameShark_4();
//FrameShark_3();
//FrameShark_2();
//FrameShark_1();
//clear();




//clear();










 






 

              
 
