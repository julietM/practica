var circleX=0;
var rectX=0;
var arcX=0;
var planeX=0;
var value=0;

var y=year();


function setup() {
createCanvas(1400,600);

}
function draw() {

  background(230,93,29);
fill(175,34,9);
ellipse(circleX,55,50,50);
circleX=circleX+1;

fill(43,107,19);
rect(rectX,130,50,45);
rectX=rectX+1;

fill(19,49,107);
arc(arcX, 250, 80, 80, 0, PI + QUARTER_PI);
arcX=arcX+1;


text('current year\n'+ y,14,18);
ellipse(mouseX,mouseY,40,40);

  }
  function mouseIPredded(){
    background(230,93,29);
  }

