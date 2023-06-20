// Получаем ссылки на элементы
var menuBtn = document.getElementById("menu-btn"); // Кнопка меню
var sideMenu = document.getElementById("side-menu"); // Боковое меню

// Обработчик клика на кнопку
menuBtn.onclick = function() {
  if (sideMenu.style.width === "0px" || sideMenu.style.width === "") {
    sideMenu.style.width = "250px";  // Открываем меню, устанавливая ширину 250px
  } else {
    sideMenu.style.width = "0px";  // Закрываем меню, устанавливая ширину 0px
  }
}