function setup() {
  console.log("setup()");
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 100, 100, 1);
}

function draw() {
  background(0, 20, 95);
  
  noStroke();
  fill(180, 50, 50);
  rect(10, 10, 50, 50);
}
