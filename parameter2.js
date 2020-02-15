let baseFace, baseFace_color;
let eye1, eye2, eye3, eye4;
let nose1, nose2, nose3, nose4;
let eyebrows1, eyebrows2, eyebrows3, eyebrows4;
let mouth1, mouth2, mouth3, mouth4;
let hair1, hair2, hair3, hair4;

var faceColR;
var faceColG;
var faceColB;

let sliderR_face, sliderG_face, sliderB_face;
let sliderEyes, sliderNose, sliderBrows, sliderMouth, sliderHair, sliderAc;
let ac1, ac2, ac3, ac4;

function preload() {
  baseFace_color = loadImage('data/baseFace_color.png');
  baseFace = loadImage('data/baseFace.png');
  
  ac1 = loadImage('data/accessory1.png');
  ac2 = loadImage('data/accessory2.png');
  ac3 = loadImage('data/accessory3.png');
  ac4 = loadImage('data/accessory4.png');

  hair1 = loadImage('data/hair1.png');
  hair2 = loadImage('data/hair2.png');
  hair3 = loadImage('data/hair3.png');
  hair4 = loadImage('data/hair4.png');

  eye1 = loadImage('data/eye1.png');
  eye2 = loadImage('data/eye2.png');
  eye3 = loadImage('data/eye3.png');
  eye4 = loadImage('data/eye4.png');

  nose1 = loadImage('data/nose1.png');
  nose2 = loadImage('data/nose2.png');
  nose3 = loadImage('data/nose3.png');
  nose4 = loadImage('data/nose4.png');

  eyebrows1 = loadImage('data/eyebrows1.png');
  eyebrows2= loadImage('data/eyebrows2.png');
  eyebrows3 = loadImage('data/eyebrows3.png');
  eyebrows4 = loadImage('data/eyebrows4.png');

  mouth1 = loadImage('data/lips1.png');
  mouth2= loadImage('data/lips2.png');
  mouth3 = loadImage('data/lips3.png');
  mouth4 = loadImage('data/lips4.png');
}

function setup() {
  createCanvas(850, 850);
  textSize(15);
  sliderR_face = createSlider(0, 255, random(100, 255));
  sliderR_face.position(700, 50);
  sliderR_face.style('width', '150px');

  sliderG_face = createSlider(0, 255, random(100, 255));
  sliderG_face.position(700, 100);

  sliderG_face.style('width', '150px');

  sliderB_face = createSlider(0, 255, random(100, 255));
  sliderB_face.position(700, 150);

  sliderB_face.style('width', '150px');


  sliderEyes = createSlider(1, 4, int(random(1, 4)));
  sliderEyes.position(700, 250);
  sliderEyes.style('width', '150px');


  sliderNose = createSlider(1, 4, int(random(1, 4)));
  sliderNose.position(700, 350);
  sliderNose.style('width', '150px');


  sliderBrows = createSlider(1, 4, int(random(1, 4)));
  sliderBrows.position(700, 450);
  sliderBrows.style('width', '150px');

  sliderMouth = createSlider(1, 4, int(random(1, 4)));
  sliderMouth.position(700, 550);
  sliderMouth.style('width', '150px');

  sliderHair = createSlider(1, 5, int(random(1, 5)));
  sliderHair.position(700, 650);
  sliderHair.style('width', '150px');
  
  sliderAc = createSlider(1, 5, int(random(1, 5)));
  sliderAc.position(700, 750);
  sliderAc.style('width', '150px');
}


function draw() {
  background(255);

  text("Face Color", 700, 30);
  text("Hair", 700, 640);
  text("Eyebrows", 700, 440);
  text("Mouth", 700, 540);
  text("Nose", 700, 340);
  text("Eyes", 700, 240);
  text("Blue", 700, 150);
  text("Green", 700, 100);
  text("Red", 700, 50);
  text("Extra", 700, 740);

  faceColR = sliderR_face.value();
  faceColG = sliderG_face.value();
  faceColB = sliderB_face.value();

  push();
  tint(faceColR, faceColG, faceColB);
  image(baseFace_color, 0, 0);
  pop();

  image(baseFace, 0, 0);

  var eyeVal = eval("eye" + sliderEyes.value());
  image(eyeVal, 0, 0);

  var noseVal = eval("nose" + sliderNose.value());
  image(noseVal, 0, 0);

  var browVal = eval("eyebrows" + sliderBrows.value());
  image(browVal, 0, 0);

  var mouthVal = eval("mouth" + sliderMouth.value());
  image(mouthVal, 0, 0);


  if(sliderHair.value() == 5){
  }
  else{
    var hairVal = eval("hair" + sliderHair.value());
    image(hairVal, 0, 0);
  }
  
    if(sliderAc.value() == 5){
  }
  else{
    var acVal = eval("ac" + sliderAc.value());
    image(acVal, 0, 0);
  }
    

}
