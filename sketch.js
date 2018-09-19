function setup(){
  createCanvas(500,500);

}

function draw(){
  background(204);
  rectMode(CENTER);
  stroke(0);
  strokeWeight(3);
  //Body
  fill(147);
  rect(245,250,120,180,10);
  rect(245,250,100,160,8);
  ellipseMode(CENTER);
  fill(255,120,120);
  ellipse(210, 310, 10);
  ellipse(280, 310, 10);
  ellipse(280, 190, 10);

  //HEAD
  fill(147);
  rect(180,160,120,60,5);
  rect(180,160,100,40,5);
  rect(180,160,20,5,1);

  //EYES

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
  stroke(0);
  strokeWeight(3);
  fill(147);
	ellipse(260, 365, 70);
  ellipse(260, 365, 10);
  ellipse(180, 365, 70);
  ellipse(180, 365, 10);
  ellipse(310, 390, 20);
  line(260, 365,310, 390);

  //LEG
  rect(210,340,100,30);
  rect(270,340,20,30);
  rect(280,340,10,30);

  //BAG
  rectMode(CORNER);
  rect(300,170,10,40);
  rect(300,210,10,20);
  quad(310, 160, 350, 140, 350, 240,310, 240);

  //GROUND
  line(0,400,width,400);
  fill(0);
  rect(0,400,width,height);
}
