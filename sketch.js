var snack;
var lastKey=0;
var size_block=10;
var speed=20;
function setup() {
	createCanvas(500, 500);
	snack=new Snack();
	frameRate(10);
}

function draw() {
   background(125,125,125);
	 snack.show();
	 snack.move_snack();
}
function keyPressed(){
	// console.log(keyCode);
	if((lastKey-keyCode)==2 || lastKey-keyCode==-2){
}
else{
	lastKey=keyCode;
snack.changeDirection(keyCode);
}
}
