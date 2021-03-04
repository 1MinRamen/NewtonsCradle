class Rope{
    constructor(bodyA, bodyB, px, py){
        this.px = px;
        this.py = py;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.px,y:this.py}
        }
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
            strokeWeight(3);
            stroke("black");
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            var a1x = pointA.x;
            var a1y = pointA.y;
            var a2x = pointB.x + this.px;
            var a2y = pointB.y + this.py;
            line(a1x,a1y,a2x,a2y);
        }
    }