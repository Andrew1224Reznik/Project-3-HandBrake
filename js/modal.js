const modalWindow = document.querySelector(".modal");
const buttonModal = document.querySelector(".faq");
const body = document.querySelector("body");
const closeModal = document.querySelector(".modal_close");

// Открытие по кнопке
buttonModal.addEventListener("click", (event) => {
  event.preventDefault(); // Предотвращаем переход по ссылке
  modalWindow.classList.add("active"); // Добавляем класс для отображения модального окна
  body.classList.add("noscroll"); // Блокируем прокрутку страницы
});

// Закрытие по кнопке
closeModal.addEventListener("click", closeModalWindow); // Используем функцию для закрытия

// Закрытие по клику вне
modalWindow.addEventListener("click", (event) => {
  // Добавляем обработчик клика на модальное окно
  if (!event.target.closest(".modal_inner")) {
    // Проверяем, что клик был вне внутреннего содержимого модального окна
    closeModalWindow(); // Вызываем функцию для закрытия модального окна
  }
});

function closeModalWindow() {
  // Функция для закрытия модального окна
  modalWindow.classList.remove("active"); // Убираем класс для скрытия модального окна
  body.classList.remove("noscroll"); // Разблокируем прокрутку страницы
}
