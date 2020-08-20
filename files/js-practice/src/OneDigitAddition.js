let canvas = document.getElementById('OneDigitAddition');
let ctx = canvas.getContext('2d');

class TextBox {
  constructor(x, y, text) {
    this.x = x;
    this.y = y;
    this.color = 'black'
    this.text = text;
  }

  draw(ctx) {
    ctx.font = '30px Times New Roman';
    ctx.fillStyle = this.color;
    ctx.textAlign = 'center';
    ctx.fillText(this.text, this.x, this.y)
  }
}

class UnitCube {
  constructor(x, y, fill) {
    // Note: x, y is the bottom middle of the square
    this.size = cubesize;
    this.x = x;
    this.y = y;
    this.color = '#8888ff';

    this.frames = 0;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x - (this.size/2), this.y - this.size, this.size, this.size);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.strokeRect(this.x - (this.size/2), this.y - this.size, this.size, this.size);
  }

  update() {

  }
}

class TenBlock {
  constructor(x, y) {
    // Note: x, y is the bottom middle of the grid
    this.x = x;
    this.y = y;
    this.size = cubesize;
  }

  draw(ctx) {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    for (i = 1; i <= 10; i++) {
      ctx.strokeRect(this.x - this.size / 2, this.y - this.size * i, this.size, this.size)
    }
  }
}

function clearScreen() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function update() {
  clearScreen();
  framecount ++;

  if (animation == 0) {
    if (framecount == 300) {
      framecount = 0;
      animation = 1;

      secondnumber.text = secondval - movingobjects.length;
      movingnumber = new TextBox( 3 * canvas.width / 6, 150, 10 - firstval)
      drawobjects.push(movingnumber)
    }
  }
  else if (animation == 1) {
    movingobjects.forEach(function(item, index) {
      item.x += dx;
      item.y += dy;
    });
    movingnumber.x += dx;

    if (framecount == animationlength) {
      framecount = 0;
      animation = 2;

      firstnumber.text = 10;
      drawobjects.pop();
    }
  } else if (animation == 2) {
    if (framecount == 50) {
      animation = 3;
      framecount = 0;

      drawobjects.push(new TextBox(5 * canvas.width / 6, 500, firstval + secondval));
      drawobjects.push(new TenBlock(5 * canvas.width / 6 - cubesize, 450));
      drawobjects.push(new TenBlock(5 * canvas.width / 6 + cubesize, 450));

      for (i = 0; i < 10; i ++) {
        drawobjects.push(new UnitCube(5 * canvas.width / 6 - cubesize, 450 - cubesize * i));
      }
      for (i = 0; i < firstval + secondval - 10; i ++) {
        drawobjects.push(new UnitCube(5 * canvas.width / 6 + cubesize, 450 - cubesize * i));
      }
    }
  } else if (animation == 3) {
    if (framecount == 200) {
      reset()
    }
  }

  drawobjects.forEach(function(item, index ) {
    item.draw(ctx);
  });
  requestAnimationFrame(update);

}

function reset() {
  animation = 0;
  framecount = 0;

  firstval = Math.floor(Math.random() * 3) + 7;
  secondval = Math.floor(Math.random() * 6) + 4;

  frozenobjects = [];
  movingobjects = [];

  frozenobjects.push(new TextBox( canvas.width/6, 500, firstval));
  frozenobjects.push(new TextBox( 2 * canvas.width/6, 500, '+'));
  frozenobjects.push(new TextBox( 3 * canvas.width/6, 500, secondval));
  frozenobjects.push(new TextBox( 4 * canvas.width/6, 500, '='));

  frozenobjects.push(new TenBlock( canvas.width / 6, 450))
  frozenobjects.push(new TenBlock( 3 * canvas.width / 6, 450))

  for (i = 0; i < firstval; i++){
    frozenobjects.push(new UnitCube( canvas.width / 6, 450 - i * cubesize ))
  }
  for (i = 0; i < secondval - (10 - firstval); i++){
    frozenobjects.push(new UnitCube( 3 * canvas.width / 6, 450 - i * cubesize ))
  }

  for (i = 0; i < 10 - firstval; i++){
    movingobjects.push(new UnitCube( 3 * canvas.width / 6, 450 - (secondval - i - 1) * cubesize));
  }
  drawobjects = frozenobjects.concat(movingobjects);

  firstnumber = new TextBox( canvas.width / 6, 150, firstval);
  secondnumber = new TextBox( 3 * canvas.width / 6, 150, secondval);

  updatingtextobjects = [firstnumber, secondnumber];

  dx = - (2 * canvas.width / 6) / animationlength;
  dy = - (cubesize * (10 - secondval)) / animationlength;

  drawobjects = frozenobjects.concat(movingobjects).concat(updatingtextobjects);
}

const cubesize = 25;
const animationlength = 75;

reset();
update();
