class Spinner {
    constructor(config) {
        this.position = createVector(random(0, windowWidth), random(0, windowHeight));
        this.velocity = p5.Vector.random2D().mult(random(-0.5, 0.5))
        //this.acceleration = p5.Vector.random2D().mult(random(0, 1))
        this.height = random(40, windowWidth / 4);
        this.width = this.height;
        this.angle = random(0, 360);
        this.angleSpeed = random(-0.003, 0.003);
        this.hue = random(130, 230);
        this.saturation = random(48, 52);
        this.lightness = random(48, 52);
        this.alphaFloor = 0.005;
        this.alphaCeiling = 0.25;
        this.alphaStep = random(0.0005, 0.005);
        this.alpha = random(this.alphaFloor, this.alphaCeiling);
    }

    drawSpinner() {
        push();
        fill(this.hue, 50, 60, this.getAlpha(this.alpha));
        //this.velocity = this.velocity.add(this.acceleration);
        this.position = this.position.add(this.velocity);
        translate(this.position.x, this.position.y);
        rotate(this.angle += this.angleSpeed);
        rect(0, 0, this.width, this.height);
        pop();
    }

    getAlpha() {
        if(this.alpha <= this.alphaFloor) {

            if(random() < 0.01) {
                this.height = random(40, windowWidth / 6);
                this.width = this.height;
                this.hue = 300;
                this.saturation = 100;
                this.lightness = 60;
                this.alphaCeiling = 1;
                this.alphaStep *= 4;
            } else {
                this.height = random(40, windowWidth / 2);
                this.width = this.height;
                this.hue = random(130, 230);
                this.alphaCeiling = 0.25;
            }

            this.position = createVector(random(0, windowWidth), random(0, windowHeight));
            this.velocity = p5.Vector.random2D().mult(random(-1, 1))
            //this.acceleration = p5.Vector.random2D().mult(random(0, 1))
            this.alphaStep = random(0.0005, 0.005);
            this.alpha = this.alphaFloor;
        }
        else if(this.alpha >= this.alphaCeiling) {
            this.alpha = this.alphaCeiling;
            this.alphaStep *= -1;
        }

        this.alpha += this.alphaStep;

        return this.alpha;
    }
}