function changeSlide(button, n) {
    const slider = button.parentElement;
    const slides = slider.querySelectorAll(".slide");
    let index = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
    slides[index].classList.remove("active");
    index = (index + n + slides.length) % slides.length;
    slides[index].classList.add("active");
}