var k = 8 / 5;
var rooi, g, b;
var sliderK;
var redslide;
var greenslide;
var blueslide;
function setup() {
  createCanvas(500,500);
  sliderK = createSlider(1, 10, 4, 0.1);
  redslide = createSlider(0, 255, 0, 1);
  greenslide = createSlider(0, 255, 0, 1);
  blueslide = createSlider(0, 255, 0, 1);
}

function draw() {
  k = sliderK.value();
  rooi = redslide.value();
  g = greenslide.value();
  b = blueslide.value();
  background(0);
  translate(width / 2, height / 2);
  
  beginShape();
  stroke(rooi,g,b);
  strokeWeight(3);
  for(var a = 0; a < TWO_PI * 10; a += 0.02){
    var r = 200 * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x,y);
    noFill();
  }
  endShape();
  if(key == ' ')
    colorDisplay(rooi,g,b);
}

function colorDisplay(rooi,g,b){
  print("Red: " + rooi);
  print("Green: " + g);
  print("Blue: " + b);
}