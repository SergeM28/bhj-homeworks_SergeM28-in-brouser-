let  editor = document.getElementById("editor");
let button = document.getElementById("btn_clear");
let text = localStorage.getItem("textEditor");

window.addEventListener("load", function() {
  editor.value = text;
})

window.addEventListener("beforeunload", function() {
  localStorage.setItem("textEditor", editor.value)
})

button.onclick = function() {
    if (localStorage.editor) { 
        localStorage.removeItem("editor")
     } else {
        false;
     }
    editor.value = '';
};
