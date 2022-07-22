let chatWidget = document.querySelector("div.chat-widget");
let openChatWidget = () => {
  chatWidget.classList.add("chat-widget_active");
}
chatWidget.addEventListener("click", openChatWidget);
const input = document.querySelector("input.chat-widget__input");
input.addEventListener("keyup", event => {
  event.preventDefault();
  if (event.keyCode == 13) {
    let value = input.value.trim();
    if (value === "") {
      alert("Нельзя отправить! Введите текст сообщения");
    }
    else {
      let currentTime = new Date();
      let time = currentTime.getHours() + ":" + currentTime.getMinutes();
      const messages = document.querySelector(".chat-widget__messages");
      messages.innerHTML += `
  <div class="message_client">
    <div class="message__time">` + time + `</div>
    <div class="message__text">` + value + `</div>
  </div>
`;
      input.value = "";
      setTimeout(() => {
        answersFromRobot = [
          "Добрый день! До свидания!",
          "Где ваша совесть?",
          "К сожалению, все операторы сейчас заняты. Не пишите нам больше",
          "Мы ничего не будем вам продавать!",
          "Вы не купили ни одного товара, для того, чтобы так с нами разговаривать",
          "Кто тут?"
        ];
        randomMsg = Math.floor(Math.random() * 6);
        messages.innerHTML += `
  <div class="message">
    <div class="message__time">` + time + `</div>
    <div class="message__text">` + answersFromRobot[randomMsg] +
          `</div>
  </div>
`;
      }, 1000);
    }
  }
});
