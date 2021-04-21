p5.disableFriendlyErrors = true;
let xOff = 0;
let pg;
const W = 1080/2;
const H = 1920/2;

let img;
function preload() {
  img = loadImage('assets/franci_mod.jpg');
}

function setup() {
  createCanvas(W,H);
  background(255,255,0);
  textAlign(CENTER);
  noStroke();
  pg = createGraphics(W + 50 ,H + 50);
  pg.pixelDensity(0.2);
  textFont('time new roman');


}

function draw() {
  background(0);
  pg.background(0);
  pg.noStroke();

  let time = frameCount * 0.05;
  let n = noise(xOff) * 500;
  let size = n * 0.6;
  let textFill = [255,255,0];


  push();
  for (let i=0; i < 500; i++) {
    pg.fill(
      194 * sin(i * 0.003 + time),
      188 * sin(i * 0.003 + time),
      199 * sin(i * 0.003 + time)
    );
    pg.ellipse(150 + i, 500 + 50 * sin(i*0.03 + time), size + 600 * sin(i * 0.02 + time));



    pg.fill(
      255 * cos(i * 0.003 + time/"2"),
      213 * cos(i * 0.003 + time/"2"),
      35 * cos(i * 0.003 + time/"2")
    );
    pg.ellipse(200 + 50 * sin(i*0.03 + time), 500 + i, size + 600 * sin(i * 0.03 + time));

    textFill[0] = 255 * sin(i * 0.005 + time/"0,5");
    textFill[1] = 213 * sin(i * 0.005 + time/"0,5");
    textFill[2] = 35 * sin(i * 0.005 + time/"0,5");
  }
  pop();

  pg.filter(BLUR,10);
  image(pg,0,0);


  image(img, 0, 0, 1150/2 , 1920/2);
  blendMode(LIGHTEST);

}
