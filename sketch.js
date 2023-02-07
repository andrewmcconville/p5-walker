let angle = 0;
let x = 1;
let spinners = Array(200);
let movers = [];

function setup() {
  console.log("setup()");
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 100, 100, 1);  
  rectMode(CENTER);
  noStroke();

  for(let i = 0; i < spinners.length; i++) {
    spinners[i] = new Spinner({});
  }

  movers[0] = new Mover({
    position: createVector(width / 2 - 36, height / 2 - 36),
    velocity: createVector(-1, 0),
    newVelocity: createVector(0, -1),
    height: random(8, 24),
    width: random(1, 6),
    travelTime: 0,
    curveSpeed: 0.01,
    angle: 0,
    angleSpeed: random(-0.005, 0.005),
    hue: 320,
    alpha: random(0, 0.4),
    edgeDistance: 200,
  });

  movers[1] = new Mover({
    position: createVector(width / 2 - 12, height / 2 - 12),
    velocity: createVector(1, 0),
    newVelocity: createVector(0, -1),
    height: random(8, 24),
    width: random(1, 6),
    travelTime: 0,
    curveSpeed: 0.01,
    angle: 0,
    angleSpeed: random(-0.005, 0.005),
    hue: 280,
    alpha: random(0, 0.4),
    edgeDistance: 200,
  });

  movers[2] = new Mover({
    position: createVector(width / 2 + 12, height / 2 + 12),
    velocity: createVector(-1, 0),
    newVelocity: createVector(0, 1),
    height: random(8, 24),
    width: random(1, 6),
    travelTime: 0,
    curveSpeed: 0.01,
    angle: 0,
    angleSpeed: random(-0.005, 0.005),
    hue: 240,
    alpha: random(0, 0.4),
    edgeDistance: 200,
  });

  movers[3] = new Mover({
    position: createVector(width / 2 + 36, height / 2 + 36),
    velocity: createVector(1, 0),
    newVelocity: createVector(0, 1),
    height: random(8, 24),
    width: random(1, 6),
    travelTime: 0,
    curveSpeed: 0.01,
    angle: 0,
    angleSpeed: random(-0.005, 0.005),
    hue: 200,
    alpha: random(0, 0.4),
    edgeDistance: 200,
  });
}

function draw() {
  // background(180, 50, 50);
  
  // spinners.forEach(spinner => {
  //   spinner.drawSpinner();
  // });

  movers.forEach(mover => {
    mover.drawMover();
  });
}
