const textSize = document.querySelectorAll("div.book__control_font-size > .font-size");
textSize[1].dataset.size = "default";
const controls = document.querySelectorAll("div.book__controls > div");
const content = document.querySelector("div.book__content");

for (let styleCtrl of controls) {
    styleCtrl.addEventListener("click", function(event){
        event.preventDefault();
        let styles = event.target.dataset;
        for (let value in styles) {
            if (value ==='textColor') {
                let activeColor = document.querySelector("div.book__control_color > .color_active");
                activeColor.classList.remove("color_active");
                event.target.classList.add("color_active");
                content.style.color = styles[value];
            }
            if (value === "bgColor") {
                let activeBgColor = document.querySelector("div.book__control_background > .color_active");
                activeBgColor.classList.remove("color_active");
                event.target.classList.add("color_active");
                content.style.backgroundColor = styles[value];
            }
            if (value === "size") {   
                let activeSize = document.querySelector(".font-size_active");
                activeSize.classList.remove("font-size_active");
                event.target.classList.add("font-size_active"); 
                switch (styles[value]) {
                  case "big":
                    if (content.classList.contains("font-size_small")) {
 content.classList.remove("font-size_small");
 }
 content.classList.add('font-size_big');
 break;
                 case "small":
                    if (content.classList.contains("font-size_big")) {
  content.classList.remove("font-size_big");
 }
 content.classList.add("font-size_small");
 break;
                 case "default":
                    if (content.classList.contains("font-size_small")) {
 content.classList.remove("font-size_small");
 }
 
if (content.classList.contains("font-size_big")) {
content.classList.remove("font-size_big");
}
     break;
    }
   }   
  }
});
}