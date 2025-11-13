const sendForm = () => {
  const form = document.querySelector(".modal"); //создаем переменную в которую сохраним модальное окно

  form.addEventListener("submit", (event) => {
    //навешиваем на форму слушатель событий submit
    event.preventDefault(); //отключаем стандартную перезагрузку страницы

    const text = form.querySelector("input[type=text]"); // сохраняем инпут имени в переменную
    const tel = form.querySelector("input[type=tel]"); //сохраняем инпут телефона в переменную
    const email = form.querySelector("input[type=email]"); //сохраняем инпут имеила в переменную

    const sendObj = {
      //создаем обьект где будет получать введенные значения инпутов при клике на submit
      name: text.value,
      phone: tel.value,
      post: email.value,
    };
  });
};

sendForm();
