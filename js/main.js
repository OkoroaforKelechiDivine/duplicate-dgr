const toggleNavButton = document.querySelector('#toggle-menu');
const miniMenu = document .querySelectorAll('.nav-link .dropdown li span');
const carouselButtonPrev = document.getElementById('carousel-button-prev');
const carouselButtonNext = document.getElementById('carousel-button-next');
const navLinks = document.querySelectorAll('nav .nav-links>.nav-link');
const animatedLink = document.querySelector('.animated-link');
const currentCountryCode = document.getElementById('current_country_code');
const currentCountryFlag = document.getElementById('current_country_flag');
const countryCodeList = document.querySelector('.cc_dropdown');
const countryCodeOptions = document.querySelectorAll('.country_code');
const filterToggle = document.getElementById('filter')


filterToggle.addEventListener('click' , () => {
    document.getElementById('filter-projects').classList.toggle('show')
    if(document.getElementById('filter-projects').classList.contains('show')) {
        document.getElementById('filter-button').innerText = 'X'
    } else {
        document.getElementById('filter-button').innerText = 'Filter'
    }
})

toggleNavButton.addEventListener('click', (e) => {
    // alert('clicked')
    e.target.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
});


navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        navLinks.forEach((link, i) => i !== idx ? link.classList.remove('active'): console.log('Do Nothing'))
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

const changeBg = (type) => {
    console.log('background changed', currentBg)
    if(type === 'next') {
        currentBg++;
        if (currentBg+1 > heroBGs.length ){
            currentBg = 0;
            console.log('next-image-generated')
        }
    } 
    if (type === 'prev') {
        currentBg--;
        if (currentBg < 0 ){
            currentBg = 2;
            console.log('prev-image-generated')
        }
    }
    
    document.querySelector('.hero-section').style.background = `linear-gradient(180deg, rgba(137, 0, 6, 0.46) 0%, rgba(0, 0, 0, 0.7) 85.5%), url(${heroBGs[currentBg].imgUrl})`;
    document.querySelector('.hero-section').style.backgroundRepeat = 'no-repeat';
    document.querySelector('.hero-section').style.backgroundSize = `cover`;
    
    animatedLink.innerText = heroBGs[currentBg].to;
    animatedLink.href = heroBGs[currentBg].link;
}

setInterval(() => {
    changeBg('next')
}, 6000);

carouselButtonNext.addEventListener('click', () => changeBg('next'))

carouselButtonPrev.addEventListener('click', () => changeBg('prev'))

currentCountryCode.addEventListener('click', () => {
    countryCodeList.classList.toggle('active')
})

countryCodeOptions.forEach(option => {
    option.addEventListener('click', () => {
        // alert('clicked');
        currentCountryFlag.src = option.children[0].src;
        currentCountryCode.innerText = option.children[1].innerText;
        console.log(option.children[1].innerText)
        countryCodeList.classList.remove('active');
    })
})