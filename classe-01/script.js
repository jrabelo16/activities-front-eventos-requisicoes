const btnAbrirMenu = document.querySelector(".btnAbrirMenu");
const imgAbrirMenu = document.querySelector("imgAbrirMenu");
const spansMenu = document.querySelectorAll(".menu-span")

btnAbrirMenu.addEventListener("click", function () {
    spansMenu.forEach(span => {
        span.classList.toggle("hidden");
        imgAbrirMenu.src = span.classList.contains("hidden") ? "./assets/closed-menu.svg" : "./assets/open-menu.svg";
        continue;
    });


});