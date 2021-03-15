class Paper {
    constructor(x, y, radius) {
        var paperOptions = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }

        this.paper = Bodies.circle(x, y, radius, paperOptions);
       
        this.radius = radius;
        this.image = loadImage("paper.png");
        

    }

    display() {
        var pos = this.paper.position;
        var angle = this.paper.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        this.paper.scale = 0.5;
        if (keyCode===UP_ARROW)
        {
            
        }
        //ellipseMode(RADIUS);
        //ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}
