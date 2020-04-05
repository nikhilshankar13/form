var mic;
let slider;
function setup() {
  createCanvas(1920, 1080, WEBGL);
    mic = new p5.AudioIn();
    orbitControl();
  mic.start();
    {
  slider1 = createSlider(1, 24, 100);
  slider1.position(10, 10);
  slider1.style('width', '100px');}
    {
  slider2 = createSlider(1, 16, 100);
  slider2.position(10, 100);
  slider2.style('width', '100px');}
    {
  slider3 = createSlider(1, 16, 100);
  slider3.position(10, 300);
  slider3.style('width', '100px');}
}

function draw() {
  background(255);
  noFill();
  var vol = mic.getLevel();
  let val1 = slider1.value();
  let val2 = slider2.value();
  let val3 = slider3.value();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01)
  torus(mouseY/2, mouseX/2, vol*200, vol*200);
  torus(mouseY/10, mouseX/10, val1,val2 );
    torus(mouseY/80, mouseX/80, val1,val2 );
}
