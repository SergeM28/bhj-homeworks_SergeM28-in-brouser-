const timeCounter = function() {
    const output = document.getElementById("timer");

    if (output.textContent > 0) {
        output.textContent --;
    }	
  else if (output.textContent <= 0) {
        alert("Вы победили в конкурсе!");
    }
}

setInterval(timeCounter, 1000);