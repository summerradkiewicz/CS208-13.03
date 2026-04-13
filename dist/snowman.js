// Size of a single snowflake
const flakeSize = 8;

window.addEventListener("DOMContentLoaded", function() {
   let canvas = document.querySelector("canvas");

   drawGround(canvas);
   drawSnowText(canvas);
   drawSnowman(canvas);
   drawSnowflakes(canvas);
});

function drawGround(canvas) {
   let context = canvas.getContext("2d");

   // Background
   context.fillStyle = "#bbb";
   context.fillRect(0, 0, canvas.width, canvas.height);

   // Ground
   context.fillStyle = "brown";
   context.fillRect(0, canvas.height - 80, canvas.width, canvas.height);
}

function drawSnowflakes(canvas) {
   for (let c = 0; c < 100; c++) {
      let x = Math.floor(Math.random() * canvas.width);
      let y = Math.floor(Math.random() * canvas.height);
      drawSingleFlake(canvas, x, y);
   }
}

function drawSnowText(canvas) {
   let context = canvas.getContext("2d");
   context.font = "80px Verdana";
   context.textAlign = "center";
   context.baseline = "top";
   context.fillStyle = "blue";
   context.fillText("SNOW", canvas.width/2, 10);
}

function drawSnowman(canvas) {
   let context = canvas.getContext("2d");
   context.fillStyle = "white";
   context.beginPath();
   context.arc(150, 200, 50, 0, Math.PI * 2);
   context.arc(150, 120, 40, 0, Math.PI * 2);
   context.arc(150, 60, 25, 0, Math.PI * 2);
   context.closePath();
   context.fill();
   // Bottom circle: arc() centered at (150, 200) with radius 50 that begins at 0 and ends at Math.PI * 2
   // Middle circle: arc() centered at (150, 120) with radius 40 that begins at 0 and ends at Math.PI * 2
   // Top circle: arc() centered at (150, 60) with radius 25 that begins at 0 and ends at Math.PI * 2
   // All three circles should use fillStyle white and be displayed with the fill() function
}

function drawSingleFlake(canvas, x, y) {
   let context = canvas.getContext("2d");
   context.beginPath();
   context.moveTo(x, y);
   context.lineTo(x + flakeSize / 2, y + flakeSize / 2);
   context.lineTo(x, y + flakeSize);
   context.lineTo(x - flakeSize / 2, y + flakeSize / 2);
   context.closePath();
   context.fillStyle = "#eee";
   context.fill();
}