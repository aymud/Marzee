const images = [
    'images/m2.JPG',
    'images/m1.JPG',
];

let touchStartX = 0;
let touchEndX = 0;
let currentImageIndex = 0;
const photoElement = document.querySelector('.photo');

function updatePhoto() {
    photoElement.src = images[currentImageIndex];
}

function handleSwipe() {
    if (touchEndX < touchStartX) {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    } else if (touchEndX > touchStartX) {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
    updatePhoto();
}

photoElement.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

photoElement.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, {passive: true});

updatePhoto();