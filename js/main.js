const toggleNavButton = document.querySelector('#toggle-menu');
const miniMenu = document .querySelectorAll('.nav-link .dropdown li span');
const carouselButtonPrev = document.getElementById('carousel-button-prev');
const carouselButtonNext = document.getElementById('carousel-button-next');
const navLinks = document.querySelectorAll('nav .nav-links>.nav-link');
const animatedLink = document.querySelector('.animated-link');

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        navLinks.forEach((link, i) => i != idx ? link.classList.remove('active'): console.log('Do Nothing'))
        link.classList.toggle('active')
    })
})

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
    {
        imgUrl: './Assets/hero-bg.png',
        link: '',
        to : ''
    },
    {
        imgUrl: './Assets/hero-bg-1.jpeg',
        link: '../pages/about.html',
        to : 'About Us'
    },
    {
        imgUrl: './Assets/hero-bg-2.jpeg',
        link: '../pages/contact.html',
        to : 'Contact Us'
    }
];

let currentBg = 0;

const changeBg = () => {
    console.log('background changed', currentBg)
    currentBg++;
    
    if (currentBg+1 > heroBGs.length){
        currentBg = 0;
        console.log('next-image-generated')
    }
    
    document.querySelector('.hero-section').style.background = `linear-gradient(180deg, rgba(137, 0, 6, 0.46) 0%, rgba(0, 0, 0, 0.4) 85.5%), url(${heroBGs[currentBg].imgUrl})`;
    document.querySelector('.hero-section').style.backgroundRepeat = 'no-repeat';
    document.querySelector('.hero-section').style.backgroundSize = `cover`;

    animatedLink.innerText = heroBGs[currentBg].to;
    animatedLink.href = heroBGs[currentBg].link;


}

setInterval(changeBg, 6000);


