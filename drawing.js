const BACKGROUND_COLOUR = "#000000";
const LINE_WIDTH = 10;
const LINE_COLOUR = "white";

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;

// global var
var canvas;
var context;
var isDrawing = false;

function prepareCanvas() {
  canvas = document.getElementById("my-canvas");
  context = canvas.getContext("2d");

  //++++ add style to canvas (line width and line colour)
  context.fillStyle = BACKGROUND_COLOUR;
  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  context.lineWidth = LINE_WIDTH;
  context.strokeStyle = LINE_COLOUR;
  context.lineJoin = "round";

  document.addEventListener("mousedown", function (event) {
    isDrawing = true;
    currentX = event.clientX - canvas.offsetLeft;
    currentY = event.clientY - canvas.offsetTop;
  });

  //++++ add event listener to track mousemoves

  document.addEventListener("mousemove", function (event) {
    if (isDrawing===true) {
      previousX = currentX;
      currentX = event.clientX - canvas.offsetLeft;
      previousY = currentY;
      currentY = event.clientY - canvas.offsetTop;

      drawline();
    }
  });

  document.addEventListener("mouseup", (event) => {
    isDrawing = false;
  });

  canvas.addEventListener("mouseleave", (event) => {
    isDrawing = false;
  });

  canvas.addEventListener("touchstart",(event)=>{
    isDrawing = true;
    currentX = event.touches[0].clientX - canvas.offsetLeft;
    currentY = event.touches[0].clientY - canvas.offsetTop;
  });

  canvas.addEventListener('touchend', (event)=>{
    isDrawing = false;

  });

  canvas.addEventListener('touchcancel', (event)=>{
    isDrawing = false;

  });

  canvas.addEventListener('touchmove',(event)=>{
    if (isDrawing===true) {
        previousX = currentX;
        currentX = event.touches[0].clientX - canvas.offsetLeft;
        previousY = currentY;
        currentY = event.touches[0].clientY - canvas.offsetTop;
        drawline()
    }

  });


}

function drawline() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.stroke();
    context.closePath();
}

function clearCanvas() {
  currentX = 0;
  currentY = 0;
  previousX = 0;
  previousY = 0;
  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}
