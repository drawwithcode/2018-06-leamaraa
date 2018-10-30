var myTable;
var myImage;

//

function preload() {
  myTable = loadTable("assets/Pokemon.csv", "csv", "header");
  myImage = loadImage("./assets/sfondo.png");
}


function setup() {

  createCanvas(windowWidth, windowHeight);

  console.log(myTable.getRowCount());
  console.log(myTable.columns);
  frameRate(7);

}

function draw() {
  backgroundImage(myImage);
  // background(lerpColor(color('#ea0043'), color('#0fefca'), frameCount / 120));


  //grafica difesa
  var Defense = myTable.getColumn("Defense");
  var minDefense = min(Defense);
  var maxDefense = max(Defense);
  console.log(maxDefense);

  for (var i = 0; i < myTable.getRowCount(); i++) {

    var val = myTable.getNum(i, "Defense");

    var xpos = map(i, 0, myTable.getRowCount(), 0, random(width));

    var ypos = map(val, minDefense, maxDefense, height, 0);
    stroke(random(255),random(255),random(255));
    noFill();
    strokeWeight(1);
    ellipse(xpos, ypos, 7);

  }
  //grafica attacco
  var Attack = myTable.getColumn("Attack");
  var minAttack = min(Attack);
  var maxAttack = max(Attack);

  for (var i = 0; i < myTable.getRowCount(); i++) {

    var val = myTable.getNum(i, "Attack");

    var xpos2 = map(i, 0, myTable.getRowCount(), 0, width);

    var ypos2 = map(val, minAttack, maxAttack, height, 0);
    stroke(255);
    strokeWeight(random(3));
    point(xpos2, ypos2);
  }

}

function backgroundImage(myImage) {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / myImage.width, height / myImage.height);
  image(myImage, 0, 0, myImage.width * scale, myImage.height * scale)
  pop();
}

//Resize image
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
