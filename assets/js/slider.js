window.addEventListener("load", () => {
    const slides = document.querySelectorAll(".slides__item");
    const btnPrev = document.querySelector(".slider__btn-prev");
    const btnNext = document.querySelector(".slider__btn-next");


    btnNext.addEventListener("click", () => {

        // 1. Encontrar el índice del slide activo
        let currentIndex;
        slides.forEach((slide, i) => {
            if (slide.classList.contains("slides__item--active")) {
                currentIndex = i;
            }
        });

        // 2. Quitar clase al actual
        slides[currentIndex].classList.remove("slides__item--active");

        // 3. Calcular el siguiente índice
        let nextIndex = (currentIndex + 1) % slides.length;

        // 4. Agregar clase al siguiente
        slides[nextIndex].classList.add("slides__item--active");

    });


    btnPrev.addEventListener("click", () => {

        let currentIndex;


        slides.forEach((slide, i) => {
            if (slide.classList.contains("slides__item--active")) {
                currentIndex = i;
            }
        });

        // 2. Quitar clase al actual
        slides[currentIndex].classList.remove("slides__item--active");

        // 3. Calcular el anterior índice
        let prevIndex = (currentIndex - 1 + slides.length) % slides.length;

        // 4. Agregar clase al anterior
        slides[prevIndex].classList.add("slides__item--active");


    })
});