// ==========меню бургер ====================================

let iconMenu = document.querySelector('.icon-menu');
iconMenu.addEventListener("click", function (e) {
   let burger_menu = document.querySelector('.icon-menu');
   burger_menu.classList.toggle('menu-open');
   let menuBody = document.querySelector('.menu');
   menuBody.classList.toggle('active-burger');
});
// =======END MENU BURGER====================================
