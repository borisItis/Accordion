document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener(
    "click",
    function (e) {
      e.stopPropagation();

      // 2. Получаем связанные элементы
      const item = this.parentElement;
      const content = this.nextElementSibling;
      const icon = this.querySelector(".accordion-icon");

      // 3. Закрываем все другие открытые элементы аккордеона
      document.querySelectorAll(".accordion-item").forEach((otherItem) => {
        if (otherItem !== item) {
          const otherHeader = otherItem.querySelector(".accordion-header");
          otherHeader.classList.remove("active");
          otherItem
            .querySelector(".accordion-content")
            .classList.remove("active");
          otherItem.querySelector(".accordion-icon").classList.remove("active");
        }
      });

      // 4. Переключаем состояние текущего элемента
      this.classList.toggle("active");
      content.classList.toggle("active");
      icon.classList.toggle("active");

      icon.textContent = icon.classList.contains("active") ? "-" : "+";

      // 6. Изменяем цвет фона заголовка
      if (this.classList.contains("active")) {
        this.style.backgroundColor = "yellow";
      } else {
        this.style.backgroundColor = "";
      }
    },
    { capture: true }
  );
});
