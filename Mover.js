class Mover {
    constructor(config) {
        this.position = createVector(width / 2, height / 2);        
        this.velocity =    createVector(1, 0);
        this.newVelocity = createVector(0, 1);
        this.height = random(8, 24);
        this.width = random(1, 6);
        this.travelTime = 0;
        this.curveSpeed = 0.01;
        this.angle = 0;
        this.angleSpeed = random(-0.005, 0.005);
        this.hue = 300;
        this.alpha = random(0.01, 1);
    }

    drawMover() {
        this.height = random(8, 24);
        this.width = random(1, 6);
        this.alpha = random(0.01, 1);
        this.travelTime++;

        if(this.velocity == this.newVelocity) {

        }
        else {
            if(this.velocity.x > this.newVelocity.x) {
                this.velocity.x = round(this.velocity.x - this.curveSpeed, 3);
            }
            else if(this.velocity.x < this.newVelocity.x) {
                this.velocity.x = round(this.velocity.x + this.curveSpeed, 3);
            }

            if(this.velocity.y > this.newVelocity.y) {
                this.velocity.y = round(this.velocity.y - this.curveSpeed, 3);
            }
            else if(this.velocity.y < this.newVelocity.y) {
                this.velocity.y = round(this.velocity.y + this.curveSpeed, 3);
            }
        }

        if(this.travelTime > 100) {
            this.changeDirection();
            this.travelTime = 0;
        }
            
        push();
        fill(this.hue, 50, 50, this.alpha);
        this.position = this.position.add(this.velocity);
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        rect(0, 0, this.width, this.height);
        pop();
    }

    changeDirection() {
        //if at top
        if(this.position.y < 100) {
            //if heading up, turn left or right
            if(this.velocity.y < 0) {
                this.newVelocity.x = random() < 0.5 ? -1 : 1;
                this.newVelocity.y = 0;
            }
            //if at top and going left or right, turn down
            else if(this.velocity.y == 0) {
                this.newVelocity.x = 0;
                this.newVelocity.y = 1;
            }
        }
        //if at bottom
        else if(this.position.y > height - 100) {
            //if heading down, turn left of right
            if(this.velocity.y > 0) {
                this.newVelocity.x = random() < 0.5 ? -1 : 1;
                this.newVelocity.y = 0;
            }
            //if at bottom and going left or right, turn up
            else if(this.velocity.y == 0) {
                this.newVelocity.x = 0;
                this.newVelocity.y = -1;
            }
        }
        //if at left
        else if(this.position.x < 100) {
            //if heading left, turn up or down
            if(this.velocity.x < 0) {
                this.newVelocity.y = random() < 0.5 ? -1 : 1;
                this.newVelocity.x = 0;
            }
            //if at left and going up or down, turn right
            else if(this.velocity.x == 0) {
                this.newVelocity.y = 0;
                this.newVelocity.x = 1;
            }
        }
        //if at right
        else if(this.position.x > width - 100) {
            //if heading right, turn up or down
            if(this.velocity.x > 0) {
                this.newVelocity.y = random() < 0.5 ? -1 : 1;
                this.newVelocity.x = 0;
            }
            //if at right and going up or down, turn left
            else if(this.velocity.x == 0) {
                this.newVelocity.y = 0;
                this.newVelocity.x = -1;
            }
        }

        //if heading up or down, go left or right
        else if(this.velocity.x == 0) {
            this.newVelocity.x = random() < 0.5 ? -1 : 1;
            this.newVelocity.y = 0;
        }
        //if heading left or right, turn up or down
        else if(this.velocity.y == 0) {
            this.newVelocity.y = random() < 0.5 ? -1 : 1;
            this.newVelocity.x = 0;
        }
    }
}