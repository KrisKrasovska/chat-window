(function (global) {
  // Функция для добавления обработчика
  function ready(fn) {
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      // Если документ уже загружен, выполняем сразу
      setTimeout(fn, 1);
    } else {
      // Иначе добавляем обработчик события DOMContentLoaded
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  // Привязываем нашу функцию к глобальному объекту
  global.ready = ready;
})(window);

// Пример использования
ready(function () {
  console.log("Страница полностью загружена и готова к работе!");
});
