// Получаем все картинки
const screenshots = document.querySelectorAll(".main_shape_screen");
const container = document.querySelector(".main_image");
let currentIndex = 0;
let autoSwitchInterval;

// Показываем первый скриншот при загрузке
window.addEventListener("DOMContentLoaded", () => {
  screenshots[0].classList.add("active");
  startAutoSwitch(); // запускаем авто-переключение
});

// Функция переключения скриншотов
function nextScreenshot() {
  screenshots[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % screenshots.length;
  screenshots[currentIndex].classList.add("active");
}

// Функция автопереключения каждые 2 секунды
function startAutoSwitch() {
  autoSwitchInterval = setInterval(nextScreenshot, 2000);
}

// По клику — тоже переключаем (и сбрасываем таймер, чтобы не пересекалось)
function manualSwitch() {
  nextScreenshot();
  clearInterval(autoSwitchInterval); // сброс интервала
  startAutoSwitch(); // перезапуск, чтобы авто снова шло после клика
}

// Добавляем клик на родителя и картинки
container.addEventListener("click", manualSwitch);
screenshots.forEach((img) => img.addEventListener("click", manualSwitch));
