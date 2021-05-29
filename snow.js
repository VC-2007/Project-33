class Snow{
    constructor(x,y,width,height){
    var options = {
        restitution: 0.8,
        friction: 1,
        density: 1,
        isStatic : false
    }
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }
}