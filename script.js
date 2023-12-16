let pixels = document.querySelector("#pixels");
let displayPixelValue = document.querySelector("#dimension");
let canvas = document.querySelector("#canvas");
let pixelValue = pixels.value;
let clear = document.querySelector(".clear");
let colorPicker = document.querySelector("#color-picker");
let currentColor = colorPicker.value;
let eraser = document.querySelector(".eraser");
let draw = document.querySelector(".draw");
let isDrawing = false;
let isErasing = false;

canvas.style.cursor = "crosshair";

pixels.addEventListener("input", () => {
  pixelValue = pixels.value;
  displayPixelValue.textContent =
    pixelValue.toString() + " x " + pixelValue.toString();
  renderPixels(pixelValue);
});

colorPicker.addEventListener("input", (event) => {
  currentColor = event.target.value;
  Sketch();
});

draw.addEventListener("click", Sketch);

eraser.addEventListener("click", Erase);

clear.addEventListener("click", Clear);

function renderPixels(pixelValue) {
  canvas.innerHTML = "";
  let pixelSide = 100 / pixelValue;
  for (let i = 0; i < pixelValue; i++) {
    for (let j = 0; j < pixelValue; j++) {
      let pixel = document.createElement("div");
      pixel.style.width = pixelSide + "%";
      pixel.classList.add("pixel");
      canvas.appendChild(pixel);
    }
  }
  Sketch();
}

function Sketch() {
  eraser.style.backgroundColor = "";
  draw.style.backgroundColor = "grey";
  canvas.addEventListener("mousedown", (event) => {
    isDrawing = true;
    event.preventDefault();
  });
  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
  });
  let pixelList = document.querySelectorAll(".pixel");
  pixelList.forEach((item) => {
    item.addEventListener("mouseover", () => {
      if (isDrawing) {
        item.style.backgroundColor = currentColor;
      }
    });
    item.addEventListener("mousedown", () => {
      item.style.backgroundColor = currentColor;
    });
  });
  canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
  });
}

function Erase() {
  draw.style.backgroundColor = "";
  eraser.style.backgroundColor = "grey";
  canvas.addEventListener("mousedown", (event) => {
    isErasing = true;
    event.preventDefault();
  });
  canvas.addEventListener("mouseup", () => {
    isErasing = false;
  });
  let pixelList = document.querySelectorAll(".pixel");
  pixelList.forEach((item) => {
    item.addEventListener("mouseover", () => {
      if (isErasing) {
        item.style.backgroundColor = "white";
      }
    });
    item.addEventListener("mousedown", () => {
      item.style.backgroundColor = "white";
    });
  });
  canvas.addEventListener("mouseleave", () => {
    isErasing = false;
  });
}

function Clear() {
  let pixelList = document.querySelectorAll(".pixel");
  pixelList.forEach((item) => {
    item.style.backgroundColor = "white";
  });
  Sketch();
}

renderPixels(pixelValue);
