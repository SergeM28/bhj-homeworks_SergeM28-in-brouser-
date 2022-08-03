const signIn = document.getElementById("signin");
signIn.classList.add("signin_active");
let login = document.getElementsByName("login")[0];
let password = document.getElementsByName("password")[0];

function clearForm() {
  login.value = "";
  password.value = "";
};

function formsChange(userId) {
  signIn.classList.toggle("signin_active");
  document.getElementById("user_id").innerText = userId;
  document.getElementById("welcome").classList.toggle("welcome_active");
};

document.getElementById("signin__btn").onclick = function(e) {
  if (login.value && password.value) {
    const form = document.getElementById("signin__form");
    let formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php", true);
    xhr.onreadystatechange = function() {
      if (xhr.status == 200 && xhr.readyState == 4) {
        let response = JSON.parse(xhr.response);
        if (response["success"] == false) {
          alert("Неверный логин или пароль!");
        } else {
          formsChange(response["user_id"]);
          localStorage.setItem("authString", JSON.stringify(response));
        };
      };
    };
    xhr.send(formData);
    clearForm();
  }
  return false;
};

document.getElementById("signout__btn").onclick = function(e) {
  formsChange("");
  localStorage.removeItem("authString");
};

