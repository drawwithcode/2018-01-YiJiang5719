function setup(){
  createCanvas(500,500);

}

function draw(){
  background(23,57,86);
  rectMode(CENTER);
  noStroke();
  //Body
  fill(224,160,25);
  rect(245,250,120,180,10);
  fill(234,187,104);
  rect(245,250,100,160,8);
  ellipseMode(CENTER);
  fill(255,120,120);
  ellipse(210, 310, 10);
  ellipse(280, 310, 10);
  ellipse(280, 190, 10);

  //HEAD
  fill(224,160,25);
  rect(180,160,120,60,5);
  fill(234,187,104);
  rect(180,160,100,40,5);
  fill(244,47,99);
  rect(180,160,20,5,1);

  //EYES
  stroke(0);
  strokeWeight(2);
	line(145,100, 145, 130);
  line(215,100, 215, 130);
  rect(145,105,30,10,1);
  rect(215,105,30,10,1);
  rect(145,105,20,2);
  rect(215,105,20,2);
  fill(255,34,34,30);

  //Leiser
  noStroke()
  triangle(215, 105, mouseX, 400, mouseX+80, 400);
  triangle(145, 105, mouseX-20, 400, mouseX+80, 400);


  //Wheel
  noStroke()
  fill(224,160,25);
	ellipse(260, 365, 70);
  ellipse(180, 365, 70);
  fill(234,187,104);
  ellipse(260, 365, 10);
  ellipse(180, 365, 10);
  ellipse(275, 370, 10);
  ellipse(245, 370, 10);
  ellipse(165, 370, 10);
  ellipse(195, 370, 10);


  //LEG
  rect(210,340,100,30,10);
  fill(193,149,10);
  rect(250,340,20,30);
  fill(150,116,23);
  rect(270,340,20,30);

  //BAG
  noStroke()
  rectMode(CORNER);
  fill(193,149,10);
  rect(300,170,10,40,5);
  fill(150,116,23);
  rect(300,210,10,20,5);


  //GROUND
  line(0,400,width,400);
  fill(13,34,55);
  noStroke();
  rect(0,400,width,height);
}
