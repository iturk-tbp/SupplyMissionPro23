var options = {
    isStatic: true,
   
}

class Box{
     constructor(x,y,w,h){
     
     this.body = Bodies.rectangle(x,y,w,h,options,{ render: { fillStyle: 'red'}});
     World.add(world,this.body);
     this.width = w;
     this.height = h;
     
    }
  display(){
      rectMode(CENTER);
      fill("red");
      rect(this.body.position.x,this.body.position.y,this.width,this.height,options);
  }
}