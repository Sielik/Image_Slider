let container = document.querySelector('.images');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let counter = 0;

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function prevSlide() {

    if (counter === 4) {
        counter = -1;
    }

    counter ++;
    container.style.backgroundImage = `url(img/bcg-${counter}.jpg`;
    container.animate([{opacity: '0.2'},{opacity: '1.0'}], {duration: 1000, fill: 'forwards'});

}
function nextSlide() {    

    if (counter === 0) {
        counter = 5;
    }

    counter --;
    container.style.backgroundImage = `url(img/bcg-${counter}.jpg`;
    container.animate([{opacity: '0.2'},{opacity: '1.0'}], {duration: 1000, fill: 'forwards'});

}