// ****** CANVAS WORK *********
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// stands for context
var c = canvas.getContext('2d');

// mouse object
var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 40;
// var minRadius = 2;

// all colors avaliable
var colorArray = [
  '#0A1827',
  '#5B9496',
  '#9AC0BA',
  '#F6EDD3',
  '#CCD9CE'
];
// listen for locaiton of mouse
window.addEventListener('mousemove', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
  // console.log(mouse);

})

window.addEventListener('resize',function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init()
})

// constructor for a cicle
function Circle (x, y, dx, dy, radius) {
 // properties of a cicle
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  // this.maxRadius = radius;
  this.color = colorArray[(Math.floor(Math.random() * colorArray.length))];
// drawing with color
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }
// function to keep cicles in window && increase side if
  this.update = function() {
    if (this.x + this.radius  > innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx
    }
    if ( this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
      this.x += this.dx;
      this.y += this.dy;

      // interactivity
      if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y <50 && mouse.y - this.y > -50) {
        if(this.radius < maxRadius){
          this.radius += 1;
        }
      }
      else if (this.radius > this.minRadius) {
        this.radius -= 1;
      }

      this.draw();
  }
}

var circleArray = [];

function init(){

  // reset cicle array
  circleArray = [];

  for ( let i = 0; i < 700; i++) {
    var radius = (Math.random() * 3) + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 1;
    var dy = (Math.random() - 0.5) * 1;
    
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
  // console.log(circleArray);
}

  function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
  }

  init();
  animate();