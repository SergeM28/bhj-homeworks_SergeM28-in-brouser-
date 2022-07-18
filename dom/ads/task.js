const ad = document.querySelectorAll("span.rotator > .rotator__case");
let textColor = ad[0].getAttribute("data-color"); 
ad[0].setAttribute("style", "color: " + textColor);
let banner = true;

function adToggle() {
    if (banner) {
        banner = false;
        let elem;
        const currentText = document.querySelector(".rotator__case_active");
        let nextText = currentText.nextElementSibling;
       if (nextText) { 
         elem = nextText;
     } 
      else {
        elem = ad[0];
      }
        timeOut = elem.getAttribute("data-speed");    
        currentText.classList.remove("rotator__case_active");
        textColor = elem.getAttribute("data-color");
        elem.classList.add("rotator__case_active");
        elem.setAttribute("style", "color: " + textColor);
        const delayResponse = setTimeout(() => {
            banner = true;
        }, timeOut);
    }
}

const timer = setInterval(() => adToggle(), 1);