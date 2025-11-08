//Создаем переменные для модального окна и кнопки открытия
const modalWindow = document.querySelector(".modal");
const buttonModal = document.querySelector(".faq");
const body = document.querySelector("body");

//Добавляем обработчик события для открытия модального окна
buttonModal.addEventListener("click", (event) => {
  event.preventDefault(); //Отменяем стандартное поведение ссылки
  modalWindow.style.display = "flex"; //Отображаем модальное окно
  body.classList.add("noscroll"); //Блокируем прокрутку страницы
});

//Добавляем обработчик события для закрытия модального окна через кнопку закрытия
const closeModal = document.querySelector(".modal_close");
closeModal.addEventListener("click", () => {
  modalWindow.style.display = "none";
  body.classList.remove("noscroll"); //Разблокируем прокрутку страницы
});

//Добавляем обработчик события для закрытия модального окна при клике вне его области
modalWindow.addEventListener("click", (event) => {
  const isModal = event.target.closest(".modal_inner");
  if (!isModal) {
    modalWindow.style.display = "none";
    body.classList.remove("noscroll"); //Разблокируем прокрутку страницы
  }
});
