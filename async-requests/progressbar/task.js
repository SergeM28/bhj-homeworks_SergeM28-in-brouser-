const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const request = new XMLHttpRequest();
    request.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    const file = document.getElementById("file").files;
    const fileName = document.querySelector(".input__wrapper-desc");
    const formData = new FormData();
    formData.append(`${fileName.innerText}`, file[0]); request.upload.addEventListener("progress", function(e) {
        progress.value = (e.loaded / e.total).toFixed(2);
    }, false);
    request.send(formData);
});