var appState = 0;
var haha1, any1;
var login,signnn, form;
function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  any1=new Anything();
 //form=new Form();
  //haha1 = new Haha();
  any1.anything();
}

function draw() {
  //background(100, 200, 0);  
 // drawSprites();
 if(appState===0){
  //any1.anything();
  
 }
 if(appState===1){
   clear();
   any1.hide();
   haha1.haha();
 }
}