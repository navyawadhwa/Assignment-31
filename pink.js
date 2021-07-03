class Ball{
    constructor(x, y) {
        var options = {
            isStatic: true,
            density:0.3
        }
        this.x = x;
        this.y = y;
        this.r = 2;
        this.body = Bodies.circle(x, y, 2, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x, pos.y, this.width, this.height, this.radius);
      }
}