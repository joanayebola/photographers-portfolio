const gridItems = document.querySelectorAll('.grid-item');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.getElementById('close-lightbox');
const prevSlide = document.getElementById('prev-slide');
const nextSlide = document.getElementById('next-slide');
let currentIndex = 0;

function showSlide(index) {
    const link = gridItems[index].querySelector('.lightbox');
    const imgUrl = link.href;
    lightboxImage.src = imgUrl;
}

gridItems.forEach((item, index) => {
    const link = item.querySelector('.lightbox');

    link.addEventListener('click', event => {
        event.preventDefault();
        currentIndex = index;
        showSlide(currentIndex);
        lightboxOverlay.style.display = 'block';
    });
});

closeLightbox.addEventListener('click', event => {
    lightboxOverlay.style.display = 'none';
});

prevSlide.addEventListener('click', event => {
    currentIndex = (currentIndex === 0) ? gridItems.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

nextSlide.addEventListener('click', event => {
    currentIndex = (currentIndex === gridItems.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        lightboxOverlay.style.display = 'none';
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex === 0) ? gridItems.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    } else if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex === gridItems.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }
});

