const toggleNavButton = document.querySelector('#toggle-menu');
const miniMenu = document .querySelectorAll('.nav-link .dropdown li span');
const carouselButtonPrev = document.getElementById('carousel-button-prev');
const carouselButtonNext = document.getElementById('carousel-button-next');

console.log(window.innerWidth)

miniMenu.forEach(drpdn => {
    drpdn.addEventListener('click', () => {
        console.log('clicked');
        if(window.innerWidth > 1000) {
            miniMenu.forEach(drpdn => drpdn.parentElement.classList.remove('active'));
        }
        drpdn.parentElement.classList.toggle('active');
    })
})

toggleNavButton.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
});

// Carousel 
const heroBGs = [
    './Assets/hero-bg.png',
    './Assets/hero-bg-1.jpeg',
    './Assets/hero-bg-2.jpeg'
];

let currentBg = 0;

const changeBg = (type) => {
    console.log('background changed')
    if (type === 'next') {
        if (currentBg+1 < heroBGs.length){
            currentBg++;
            console.log('next-image-generated')
        } else {
            currentBg = 0;
        }
    } else if (type === 'prev') {
        if (currentBg <= 2 && currentBg > 0){
            currentBg--;
            console.log('prev-image-generated')
        } else {
            currentBg = 2;
        }
    }
    
    document.querySelector('.hero-section').style.background = `linear-gradient(180deg, rgba(137, 0, 6, 0.46) 0%, rgba(0, 0, 0, 0.4) 85.5%), url(${heroBGs[currentBg]})`;
    document.querySelector('.hero-section').style.backgroundRepeat = 'no-repeat';
    document.querySelector('.hero-section').style.backgroundSize = `cover`;
}

carouselButtonNext.addEventListener('click', () => changeBg('next'));

carouselButtonPrev.addEventListener('click', () => changeBg('prev'));

document.getElementById('scroll_button').addEventListener('click', () => changeBg('next'))

