let angle = 0;
let x = 1;
let spinners = Array(1000);
let mover;

function setup() {
  console.log("setup()");
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 100, 100, 1);  
  rectMode(CENTER);
  noStroke();
  //frameRate(10);

  for(let i = 0; i < spinners.length; i++) {
    spinners[i] = new Spinner({});
  }

  mover = new Mover({});
}

function draw() {
  //background(180, 50, 50);
  
  // spinners.forEach(spinner => {
  //   spinner.drawSpinner();
  // });

  mover.drawMover();
}
