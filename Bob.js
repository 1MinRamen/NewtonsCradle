class Bob{
    constructor(x,y,radius){
        var options ={
        isStatic:false,
        restitution:1,
        friction:0,
        density:0.5,
        }
        this.r = radius;
        this.body = Bodies.circle(x,y,this.r/2,options);
        World.add(world, this.body);
    }
        display(){
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            // ellipseMode(RADIUS);
            rectMode(CENTER);
            fill("purple");
            ellipse(0,0,this.r,this.r);
            pop();
        }
            
    }