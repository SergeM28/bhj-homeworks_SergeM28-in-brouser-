const signIn = document.getElementById("signin");
const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const signoutBtn = document.getElementById("signout__btn");

form.addEventListener("submit", e => {
  e.preventDefault();
 const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php"); 
  
  xhr.addEventListener("readystatechange", function() {
    if (this.readyState !== this.DONE)  
      return;
       
         if (xhr.status == 200 && xhr.readyState == 4) {
          const response = JSON.parse(xhr.responseText);
          if (!response.success) {
            alert("Неверный логин/пароль");
            return;
          }
          if (!response.user_id) {
            alert("Ошибка ответа сервера");
            return;
          }
          
          localStorage.userId = response.user_id;
          userId.innerText = localStorage.userId;
          signIn.classList.remove("signin_active");
          welcome.classList.add("welcome_active");          
          
       }
  });
  
  xhr.send(formData);
   for (const input of form.querySelectorAll("input"))
    input.value = "";
  });

signoutBtn.addEventListener("click", () => {
  delete localStorage.userId;
  welcome.classList.remove("welcome_active"); 
  signIn.classList.add("signin_active");  
});

if (localStorage.userId !== undefined) {
  userId.innerText = localStorage.userId;
  welcome.classList.add("welcome_active");  
} else
  signIn.classList.add("signin_active");