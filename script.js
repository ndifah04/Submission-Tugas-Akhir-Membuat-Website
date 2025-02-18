document.addEventListener("DOMContentLoaded", function () {
    const galeriContainer = document.querySelector(".galeri-cards");

    const images = [
        { src: "foto.png", title: "Gambar 1", desc: "Mahasiswa Teknik Informatika" },
        { src: "foto.png", title: "Gambar 2", desc: "Mahasiswa Teknik Informatika" },
        { src: "foto.png", title: "Gambar 3", desc: "Mahasiswa Teknik Informatika" },
        { src: "hero.png", title: "Gambar 4", desc: "Mahasiswa Teknik Informatika" },
        { src: "hero.png", title: "Gambar 5", desc: "Mahasiswa Teknik Informatika" },
        { src: "hero.png", title: "Gambar 6", desc: "Mahasiswa Teknik Informatika" },
    ];

    images.forEach((img) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.textContent = img.title;

        const image = document.createElement("img");
        image.src = img.src;
        image.alt = img.title;

        const desc = document.createElement("p");
        desc.textContent = img.desc;

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(desc);

        galeriContainer.appendChild(card);
    });
    let slideIndex = 0;

showSlides();
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000);
}

function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

});
