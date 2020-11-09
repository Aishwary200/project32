class Polygon{
    constructor(x, y, radius) {
        var options = {
            
            'restitution':0.8,
            'friction':1.0,
            'density':2.0
        }
        this.body = Bodies.circle(x, y,radius, options);
        
        this.radius=radius;
        World.add(world, this.body);
      }
      display(){
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(this.body.position.x,this.body.position.y, this.radius*2, this.radius*2);
       
      }
  }