class Bob
{
    constructor(x,y,radius)
    {
        var options = {
            'restitution':0.3, 
            'friction':0.5, 
            'density':1.2, 
            isStatic:false
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
    }

    display()
    {
       var pos = this.body.position;
        push();
       translate(pos.x,pos.y);
       ellipseMode(CENTER);
       fill("pink");
       ellipse(pos.x, pos.y, this.radius); 
        pop();
    }
}
