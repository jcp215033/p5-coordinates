function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
}

function draw() {
  background(255);

  fill(150);
  strokeWeight(1);
  textSize(12);
  for (let x = 25; x < width; x += 25) {
    stroke(150);
    line(x, 0, x, 10);
    noStroke();
    text(x, x, 25);
  }

  for (let y = 25; y < height; y += 25) {
    stroke(150);
    line(0, y, 10, y);
    if (y > 25) {
      noStroke();
      text(y, 25, y);
    }
  }

  fill(0);
  noStroke();
  ellipse(mouseX, mouseY, 10, 10);

  textSize(18);
  text(
    `(${parseInt(mouseX)}, ${parseInt(mouseY)})`,
    parseInt(mouseX) + 55,
    parseInt(mouseY) + 45
  );

  text(
    `y: ${parseInt(mouseY)} px`,
    parseInt(mouseX) + 55,
    parseInt(mouseY) + 15
  );
  text(
    `x: ${parseInt(mouseX)} px`,
    parseInt(mouseX) + 55,
    parseInt(mouseY) - 10
  );

  textSize(24);
  fill(100);
  text(`Canvas Width: ${windowWidth} px`, width / 2, height / 2 - 24);
  text(`Canvas Height: ${windowHeight} px`, width / 2, height / 2 + 24);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
