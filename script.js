let pixels = document.querySelector("#pixels");
let displayPixelValue = document.querySelector("#dimension");
let canvas = document.querySelector("#canvas");
let pixelValue = pixels.value;
let clear = document.querySelector(".clear");

pixels.addEventListener("input", () => {
  pixelValue = pixels.value;
  displayPixelValue.textContent =
    pixelValue.toString() + " x " + pixelValue.toString();
  renderPixels(pixelValue);
});

clear.addEventListener("click", Clear);

// function renderPixels(pixelValue) {
//   let totalPixels = pixelValue * pixelValue;
//   canvas.innerHTML = "";
//   let pixelSide = 500 / pixelValue;
//   for (let i = 0; i < totalPixels; i++) {
//     let pixel = document.createElement("div");
//     pixel.style.width = pixelSide + "px";
//     pixel.classList.add("pixel");
//     canvas.appendChild(pixel);
//   }
// }

function renderPixels(pixelValue) {
  canvas.innerHTML = "";
  let pixelSide = 500 / pixelValue;
  for (let i = 0; i < pixelValue; i++) {
    for (let j = 0; j < pixelValue; j++) {
      let pixel = document.createElement("div");
      pixel.style.width = pixelSide + "px";
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
      item.style.backgroundColor = "black";
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
