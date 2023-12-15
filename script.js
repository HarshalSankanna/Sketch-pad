let pixels = document.querySelector("#pixels");
let displayPixelValue = document.querySelector("#dimension");
let canvas = document.querySelector("#canvas");
let pixelValue = pixels.value;
let clear = document.querySelector(".clear");
let colorPicker = document.querySelector("#color-picker");
let currentColor = colorPicker.value;
let eraser = document.querySelector(".eraser");
let draw = document.querySelector(".draw");

draw.style.backgroundColor = "grey";

pixels.addEventListener("input", () => {
  pixelValue = pixels.value;
  displayPixelValue.textContent =
    pixelValue.toString() + " x " + pixelValue.toString();
  renderPixels(pixelValue);
});

colorPicker.addEventListener("input", (event) => {
  currentColor = event.target.value;
});

draw.addEventListener("click", () => {
  eraser.style.backgroundColor = "";
  draw.style.backgroundColor = "grey";
  Sketch();
});

eraser.addEventListener("click", () => {
  draw.style.backgroundColor = "";
  eraser.style.backgroundColor = "grey";
  Erase();
});

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
  let pixelList = document.querySelectorAll(".pixel");
  pixelList.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = currentColor;
    });
  });
}

function Erase() {
  let pixelList = document.querySelectorAll(".pixel");
  pixelList.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "white";
    });
  });
}

function Clear() {
  let pixelList = document.querySelectorAll(".pixel");
  pixelList.forEach((item) => {
    item.style.backgroundColor = "white";
  });
}

renderPixels(pixelValue);
