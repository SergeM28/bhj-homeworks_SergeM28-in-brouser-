const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const request = new XMLHttpRequest();
  request.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  const formData = new FormData(form);

  request.upload.onprogress = (e) => {
      progress.value = (e.loaded) / (e.total);
    };   

  request.send(formData);
});