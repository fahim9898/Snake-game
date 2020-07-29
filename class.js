var score=0;
var cou=0;
var block_locX=[];
var block_locY=[];
class Snack{
    constructor(){
      this.location=createVector(20*speed,20*speed);        // starting location
      this.velocity=createVector(speed,0);                  //starting move only x dirction
      this.food=createVector(speed*floor(random(0,width/speed)),speed*floor(random(0,height/speed)));
                                                     // location of food
    }
    show(){
      var size_block=10;
      fill(0,255,0);
      rect(this.location.x-size_block,this.location.y-size_block,2*size_block,2*size_block);
      // for(var i=score;i>0;i--){
      //   rect(block_locX[i]-size_block, block_locY[i]-size_block, 2*size_block, 2*size_block);
      // }
      for(var i=0;i<=score;i++){
        fill(0,0,255);
        rect(block_locX[cou-i]-size_block, block_locY[cou-i]-size_block, 2*size_block, 2*size_block);
        if((block_locX[cou-i]==this.location.x)&&block_locY[cou-i]==this.location.y){
           fill(255,255,255);
          noLoop();
        }
      }
      noFill();
      fill(125,0,0);
      rect(this.food.x-size_block/2,this.food.y-size_block/2,size_block,size_block);
      noFill();
    }
    changeDirection(key_value){
      if(key_value==37){    //LEFT KEY PRESSED
       this.velocity.x=-speed;
       this.velocity.y=0;              //update velocity
      }
      if(key_value==39){     //RIGHT KEY PRESSED
        this.velocity.x=speed;             //update velocity
        this.velocity.y=0;
      }
      if(key_value==38){      //UPPER KEY PRESSED
        this.velocity.x=0;
        this.velocity.y=-speed;              //update velocity
      }
      if(key_value==40){       //LOWER KEY PRESSED
        this.velocity.x=0;
        this.velocity.y=speed;               //update velocity
      }
    }
  move_snack(){
    block_locX[cou]=this.location.x;
    block_locY[cou]=this.location.y;
    cou++;
    this.location.add(this.velocity);
     if(this.location.x>width){
       this.location.x=0;
     }
     if(this.location.x<0){
       this.location.x=width;
     }
     if(this.location.y>height){
       this.location.y=0;
     }
     if(this.location.y<0){
       this.location.y=height;
     }
     if((this.location.x==this.food.x)&&this.location.y==this.food.y){
         this.food.x=speed*floor(random(0,width/speed));
         this.food.y=speed*floor(random(0,height/speed));            //change FOOD LOCATION
         console.log(score);
         score++;
     }
  }
}
