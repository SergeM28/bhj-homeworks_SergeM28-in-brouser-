const image = document.getElementById("cookie");
let timer = Date.now();
let img = 0;
let counter = 0;
function sizeChanges() {
  counter +=1;
  let clickTimer = Date.now();
  if (img === 0) {
    img = 1;
    image.width += 100; 
  }
  
  else {
    img = 0;
   image.width -= 100;
  }
  document.getElementById("clicker__counter").textContent = counter + "\n" + "Скорость клика: " + ((clickTimer - timer) / 1000) + " сек.";
  timer = Date.now();
}
image.onclick = sizeChanges;