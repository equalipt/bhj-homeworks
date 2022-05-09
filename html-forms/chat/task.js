const chatWidget = document.querySelector(".chat-widget");
const chatWidgetSide = document.querySelector(".chat-widget__side")
const chatWidgetInput = document.getElementById("chat-widget__input");
const chatWidgetContainer = document.querySelector(".chat-widget__messages-container");
const closeChat = document.querySelector(".close-chat");

let messages = document.getElementById("chat-widget__messages");

const robotMessages = {
  question: [
    "Почему молчишь?",
    "Может поболтаем?",
    "Ну подумай ещё, я не тороплю",
    "Ну ты конечно массовик-затейник...",
    "Ладно, пока! Я в гибернацию",
  ],
  answer: [
    "Привет!",
    "Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
    "Как дела?",
    "Мы заняты! Пока.",
    "Какая хорошая погода! Скажи?!",
    "Ага",
    "Ерунду пишешь",
    "Почему не спишь?",
    "Я в шоке от происходящего...",
    "Есть варианты не отвечать?",
    "Скучно!",
    "А вы нам нравитесь!",
    "А есть ли жизнь на Марсе?",
    "Слышал, что программистам не нужна математика, это правда?",
    "Мы не чего не продаем!",
    "Ну ок",
  ],
};

const getTime = function () {
  let date = new Date();
  let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  return hours + ":" + minutes;
};

let isMessaged = false;

chatWidgetSide.addEventListener("click", () => {
  chatWidget.classList.add("chat-widget_active");
  closeChat.classList.add("close-chat_active")

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      let time = getTime();
      let chatInput = document.getElementById("chat-widget__input");

      if (chatInput.value.trim()) {
        messages.innerHTML += `
          <div class="message message_client">
            <div class="message__time">${time}</div>
            <div class="message__text">${chatInput.value}</div>
          </div>
        `;

        let indexRobotAnswer = Math.floor(Math.random() * robotMessages.answer.length);

        setTimeout(() => {
          messages.innerHTML += `
            <div class="message">
              <div class="message__time">${time}</div>
              <div class="message__text">${robotMessages.answer[indexRobotAnswer]}</div>
            </div>
          `;

          chatWidgetContainer.scrollTop = 100000;
        }, 300);

        isMessaged = true;
      }

      chatInput.value = "";
    }
  });
});

closeChat.addEventListener("click", () => {
  chatWidget.classList.remove("chat-widget_active")
  closeChat.classList.remove("close-chat_active")
})

let indexRobotQuestion = 0;

let intervalId = setInterval(() => {
  if (chatWidget.classList.contains("chat-widget_active") && !isMessaged) {
    time = getTime();
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">${robotMessages.question[indexRobotQuestion]}</div>
      </div>
    `;
    indexRobotQuestion = (indexRobotQuestion + 1) % robotMessages.question.length;
    chatWidgetContainer.scrollTop = 1000;

    if (indexRobotQuestion === 0) {
      clearInterval(intervalId);
    }
  }
}, 30000);