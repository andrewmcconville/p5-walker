class Mover {
    constructor(config) {
        this.position = config.position;        
        this.velocity = config.velocity;
        this.newVelocity = config.newVelocity;
        this.height = config.height;
        this.width = config.width;
        this.travelTime = config.travelTime;
        this.curveSpeed = config.curveSpeed;
        this.turnAvoidance = config.turnAvoidance;
        this.angle = config.angle;
        this.angleSpeed = config.angleSpeed;
        this.hue = config.hue;
        this.alpha = config.alpha;
        this.edgeDistance = 50;
        this.draw = true;
    }

    drawMover() {
        this.height = random(6, 20);
        this.width = random(1, 6);
        this.alpha = random(0.01, 0.5);
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
            random() < 1 ? this.draw = true : this.draw = false;
        }
            
        push();
        this.position = this.position.add(this.velocity);
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());

        if(this.draw) {
            fill(random(this.hue - 50, this.hue + 50), random(20, 70), random(60, 100), this.alpha);
            rect(0, 0, this.width, this.height);
            fill(random(this.hue - 50, this.hue + 50), random(20, 60), random(70, 100), this.alpha / 2);
            rect(0, 0, this.width / 2, this.height * 2);
            fill(random(this.hue - 50, this.hue + 50), random(20, 50), random(80, 100), this.alpha / 4);
            rect(0, 0, this.width / 2, this.height * 4);
            fill(random(this.hue - 50, this.hue + 50), random(20, 40), random(80, 100), this.alpha / 6);
            rect(0, 0, this.width / 2, this.height * 8);
        }

        pop();
    }

    changeDirection() {
        //if at top
        if(this.position.y < this.edgeDistance) {
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
        else if(this.position.y > height - this.edgeDistance) {
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
        else if(this.position.x < this.edgeDistance) {
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
        else if(this.position.x > width - this.edgeDistance) {
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
            if(random() < this.turnAvoidance) {
                return
            } else {
                this.newVelocity.x = random() < 0.5 ? -1 : 1;
                this.newVelocity.y = 0;
            }
        }
        //if heading left or right, turn up or down
        else if(this.velocity.y == 0) {
            if(random() < this.turnAvoidance) {
                return
            } else {
                this.newVelocity.y = random() < 0.5 ? -1 : 1;
                this.newVelocity.x = 0;
            }
        }
    }
}