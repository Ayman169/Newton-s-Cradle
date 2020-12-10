class Bob{
    constructor(x,y,radius){
        var options = {
            restitution : 1.2,
            friction : 1.2,
            density : 0.5
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        this.image = loadImage("Marble.jpg");
        World.add(world, this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        stroke(27, 225, 125);
        fill(27, 225, 125);
        image(this.image, 0, 0, 52, 52);
        pop();
    }
}