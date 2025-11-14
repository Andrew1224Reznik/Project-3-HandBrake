const NOTIFICATION_DELAY = 3000; /*создаем переменную задержки появления окна*/
const HIDE_DELAY = 30000; /*создаем переменную задержки скрытия окна*/

const popupWindow =
  document.querySelector(
    ".popup"
  ); /*создаем переменную в которую вкладываем весь код всплывающего окна */
const closeBtn =
  document.querySelector(
    ".popup_close"
  ); /*создаем переменную кнопки иконки закрытия */

function showPopupWindow() {
  /*создаем функцию которая выводит всплывающее окно через 3cекунды */
  setTimeout(() => {
    popupWindow.classList.add("show");
  }, NOTIFICATION_DELAY);
}

function closePopupWindow() {
  /*создаем функцию которая закрывает всплывающее окно */
  popupWindow.classList.remove("show");
}

showPopupWindow();

function hidePopupWindow() {
  /*создаем функцию которая спрячет всплывающее окно через 30секунд*/
  setTimeout(() => {
    closePopupWindow();
  }, HIDE_DELAY);
}

hidePopupWindow();

function closeOnIconNotification() {
  /*создаем функцию закрытия окна на крестик*/
  // Закрытие по крестику
  closeBtn.addEventListener("click", closePopupWindow);
}

closeOnIconNotification();

function closeNotification() {
  /* создаем функцию закрытия окна по клику вне окна*/
  // Закрытие при клике вне окна
  document.addEventListener("click", (event) => {
    // Проверяем: окно открыто, клик не внутри окна и не по самому popup
    if (
      popupWindow.classList.contains("show") /*Проверяет, открыт ли попап*/ &&
      !event.target.closest(
        ".popup_inner"
      ) /*Проверяет, где именно произошёл клик, клик не внутри .popup_inner*/ &&
      !event.target.closest(
        ".popup"
      ) /*Подстраховка — проверка, что клик вообще не был внутри всего блока .popup*/
    ) {
      closePopupWindow();
    }
  });
}

closeNotification();
