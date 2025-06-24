document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", (e) => {
    e.stopPropagation();

    const item = header.parentElement;
    const content = header.nextElementSibling;
    const icon = header.querySelector(".accordion-icon");

    // Закрытие других открытых элементов
    document.querySelectorAll(".accordion-item").forEach((otherItem) => {
      if (otherItem !== item) {
        const otherHeader = otherItem.querySelector(".accordion-header");
        otherHeader.classList.remove("active");
        otherHeader.style.backgroundColor = ""; // Сброс фона для других заголовков
        otherItem
          .querySelector(".accordion-content")
          .classList.remove("active");
        otherItem.querySelector(".accordion-icon").classList.remove("active");
      }
    });

    // Переключение текущего элемента
    header.classList.toggle("active");
    content.classList.toggle("active");
    icon.classList.toggle("active");

    // Изменение цвета фона при клике
    if (header.classList.contains("active")) {
      header.style.backgroundColor = "#f0f0f0"; // Цвет для активного состояния
    } else {
      header.style.backgroundColor = ""; // Сброс цвета
    }

    // Изменение символа +/-
    icon.textContent = icon.classList.contains("active") ? "-" : "+";
  });
});
