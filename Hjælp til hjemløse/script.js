//kommer fra https://www.youtube.com/watch?v=nAjR0Oj0J8E - duplikere logos-slide

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);



document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider");

    function showSlide(slider) {
        const images = slider.querySelectorAll(".slider-image");
        let currentIndex = 0;

        function nextSlide() {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            showImage(currentIndex);
        }

        function showImage(index) {
            images.forEach(function (image, i) {
                if (i === index) {
                    image.classList.add("active");
                } else {
                    image.classList.remove("active");
                }
            });
        }

        setInterval(nextSlide, 4000); //-- Hver 4 sekund

        showImage(currentIndex);
    }

    sliders.forEach(function (slider) {
        showSlide(slider);
    });
});