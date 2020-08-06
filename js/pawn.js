class Pawn {
  current_pos;
  next_pos;
  direction;

  constructor(position, direction, speed) {
    this.direction = direction;
    this.current_pos = position;
    this.next_pos = position;
    this.speed = speed;
  }

  follow(x, y) {
    const target = createVector(x, y);
    const distance = target.sub(this.current_pos);
    this.direction = distance.copy();
    this.direction.normalize();
    this.direction.mult(this.speed);
    if (distance.mag() > 50) {
      this.next_pos.add(this.direction);
    }
  }

  draw() {
    this.current_pos = this.next_pos.copy();
    push();
    translate(this.current_pos.x, this.current_pos.y);
    rotate(this.direction.heading());
    scale(4);
    noFill();
    stroke(255);
    strokeWeight(0.5);
    triangle(4, 0, -2, -2, -2, 2);
    pop();
  }
}
