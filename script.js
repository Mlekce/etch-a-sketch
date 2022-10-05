const container = document.querySelector(".container");
const display = document.querySelector(".display");
const pallete = document.getElementById("pallete");

function displayValue(){
  display.innerText = document.querySelector('#slide').value;
}

function colorsPicker(){
  let color = pallete.value;
  return color;
}

function createGrid() {
  const num = document.querySelector("#slide").value;
  container.style.cssText = `grid-template-columns: repeat(${num}, minmax(0, 1fr)); grid-template-rows: repeat(${num}, minmax(0, 1fr));`;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      container.innerHTML += "<div class='box'></div>";
    }
  }
  colored();
}

function colored() {
  const boxes = document.querySelectorAll(".box");
    boxes.forEach(function (box) {
      box.addEventListener("mouseover", (event) => {        
        event.target.style.backgroundColor = colorsPicker();
      });
    });
};
  
function clearScreen(){
  const elements = document.querySelectorAll('.box');
  elements.forEach((element)=>{
    element.remove();
  });
};

function clearClass(){
  const elements = document.querySelectorAll('.box');
    elements.forEach((element)=>{
    element.style.cssText = 'background-color:rgb(180, 207, 235)';
  });
}

