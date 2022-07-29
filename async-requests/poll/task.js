const title = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.addEventListener("readystatechange", function() {
  if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
    let quizObj = JSON.parse(xhr.responseText).data;
    title.innerText = quizObj.title;
    for (let answer of quizObj.answers) {
      answers.innerHTML +=
        `<button class="poll__answer" style="margin: 3px">
                    ${answer}
                </button>`;
    }
  }
})
answers.addEventListener("click", () => {
  const modalMsg = document.querySelector("body");
  modalMsg.insertAdjacentHTML("beforeEnd",
    `<div class="modal_mask">
       <div class="modal">
            <div class="modal_msg">Спасибо, ваш голос засчитан!</div>
            <button class="close_btn">Закрыть</button>
        </div>
    </div>`
  );
  const closeBtn = document.querySelector(".close_btn");
  closeBtn.addEventListener("click", (e) => e.target.closest("div.modal_mask").remove());
});