const pawns = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  pawns.push(
    new Pawn(
      createVector(random(0, width), random(0, height)),
      createVector(1, 0),
      10
    )
  );
}

function draw() {
  background(30);
  stroke(255);

  pawns.forEach((pawn) => {
    pawn.follow(mouseX, mouseY);
    pawn.draw();
  });
}
