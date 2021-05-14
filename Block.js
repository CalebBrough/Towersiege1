class Block{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      rectMode(CENTER);
      var pos=this.body.position;
      fill("green");
      stroke("black");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
}