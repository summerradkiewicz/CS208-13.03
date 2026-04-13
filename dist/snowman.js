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

// Write the word "SNOW"
function drawSnowText(canvas) {
   let context = canvas.getContext("2d");
   context.font = "80px Verdana";
   context.textAlign = "center";
   context.baseline = "top";
   context.fillStyle = "blue";
   context.fillText("SNOW", canvas.width/2, 70);
}

// Create 3 circles on top of each other
function drawSnowman(canvas) {
   let context = canvas.getContext("2d");
   context.fillStyle = "white";
   context.beginPath();
   context.arc(150, 200, 50, 0, Math.PI * 2);
   context.arc(150, 120, 40, 0, Math.PI * 2);
   context.closePath(); // closing the path here to prevent the path from the bottom connecting to the top
                        // note: no idea why it's not needed after each arc but it looks like this works
   context.arc(150, 60, 25, 0, Math.PI * 2);
   context.fill();
}

// Create a rhombus shaped snowflake
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