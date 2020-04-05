var mic;
let slider1;
let slider2;
let slider3; 
let slider4;
//let colorPicker;

function setup() {
  createCanvas(1920, 1080);

  //colorPicker = createColorPicker('#ed225d');
  //colorPicker.position(0, height + 5);
  mic = new p5.AudioIn();
  mic.start();
   {
  slider1 = createSlider(10, 255, 100);
   slider1.position(10, 10);
   slider1.style('width', '100px');}
   {
   slider2 = createSlider(10, 255, 100);
   slider2.position(10, 100);
   slider2.style('width', '100px');}
   {
   slider3 = createSlider(10, 255, 100);
   slider3.position(10, 300);
   slider3.style('width', '100px');} 
  {
    slider4 = createSlider(1, 5, 100);
    slider4.position(10, 500);
    slider4.style('width', '100px');
  }


  background(255);


}

function draw() {

  var vol = mic.getLevel();
  let  val1 = slider1.value()+vol*200;
    let val2 = slider2.value()+vol*200;
    let val3 = slider3.value()+vol*200; 
  let val4 = slider4.value();

  fill(val1,val2,val3);
  //fill(colorPicker.color());
  stroke(0);
  blendMode(MULTIPLY);
  strokeWeight(val4);
  ellipse(mouseX, mouseY, vol * 2000, vol * 2000);
}
