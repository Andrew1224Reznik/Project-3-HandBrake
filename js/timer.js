//находим элементы таймера в HTML
const hoursBlock = document.querySelector(".timer_hours");
const minutesBlock = document.querySelector(".timer_minutes");
const secondsBlock = document.querySelector(".timer_seconds");
const daysBlock = document.querySelector(".timer_days");

//переменная для хранения интервала
let interval;

//функция для выбора правильного слова (напр. Day/Days)
const numWord = (value, words) => {
  const v = Math.abs(Math.floor(value));
  return v === 1 ? words[0] : words[1];
};

const updateTimer = () => {
  const date = new Date();
  const dateDeadline = new Date("21 november 2025").getTime();
  const timeRemain = (dateDeadline - date) / 1000;

  const days = Math.floor(timeRemain / 60 / 60 / 24);
  const hours = Math.floor((timeRemain / 60 / 60) % 24);
  const minutes = Math.floor((timeRemain / 60) % 60);
  const seconds = Math.floor(timeRemain % 60);

  const fDays = days < 10 ? "0" + days : days;
  const fHours = hours < 10 ? "0" + hours : hours;
  const fMinutes = minutes < 10 ? "0" + minutes : minutes;
  const fSeconds = seconds < 10 ? "0" + seconds : seconds;

  daysBlock.textContent = fDays;
  hoursBlock.textContent = fHours;
  minutesBlock.textContent = fMinutes;
  secondsBlock.textContent = fSeconds;

  daysBlock.nextElementSibling.textContent = numWord(days, ["Day", "Days"]);
  hoursBlock.nextElementSibling.textContent = numWord(hours, ["Hour", "Hours"]);
  minutesBlock.nextElementSibling.textContent = numWord(minutes, [
    "Minute",
    "Minutes",
  ]);
  secondsBlock.nextElementSibling.textContent = numWord(seconds, [
    "Second",
    "Seconds",
  ]);
  if (timeRemain <= 0) {
    clearInterval(interval);
    daysBlock.textContent = "00";
    hoursBlock.textContent = "00";
    minutesBlock.textContent = "00";
    secondsBlock.textContent = "00";
  }
};

updateTimer();
interval = setInterval(updateTimer, 500);
