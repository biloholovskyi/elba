const startFullPage = () => {
  // получить список всех экранов
  const fullPages = document.querySelectorAll('.fullPage');

  // сделать первый экран видимым
  fullPages[0].classList.add('fullPage--active');
}

export {startFullPage}