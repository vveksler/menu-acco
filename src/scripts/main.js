// ACORDION SECTION MENU

if ($(".menu-acco").length) { // Есть ли на странице элемент с таким классом
  $(".menu-acco__trigger").on("click", e => { // навешиваем обработчик события по клику на элемент с классом menu-acco__trigger
    e.preventDefault();
    const element = e.currentTarget; // Тот элемент на который повесили обработчик
    const item = element.parentNode; // его родитель - item, блок выше
    const allItems = $(".menu-acco__item"); // Все айтемы, все элементы списка

    if (!$(item).hasClass("active")) { // Проверяем, если есть на текущем элемете списка класс active, то тогда выполняем то что внутри
      $(allItems).removeClass("active"); // У всех айтемов удаляем класс active
      $(item).addClass("active"); // На тот, который кликнули - добавляем
    }
  });

  $(".menu-acco__close").on("click", e => { // Обработчик события по клику на крестик
    e.preventDefault();
    $(".menu-acco__item").removeClass("active"); // У всех элементов списка удаляется класс active
  });
}
