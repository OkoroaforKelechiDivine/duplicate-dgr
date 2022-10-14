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

const container = document.querySelectorAll(".range-slider");

const slider = container[0].querySelector(".slider");
const thumb = container[0].querySelector(".slider-thumb");
const tooltip = container[0].querySelector(".tooltip");
const progress = container[0].querySelector(".progress");

const slider_2 = container[1].querySelector(".slider");
const thumb_2 = container[1].querySelector(".slider-thumb");
const tooltip_2 = container[1].querySelector(".tooltip");
const progress_2 = container[1].querySelector(".progress");


function customSlider() {
    // alert('working')
    //Get the percentage
    const maxVal = slider.getAttribute("max");
    const maxVal2 = slider_2.getAttribute("max");
    const val = (slider.value / maxVal) * 100 + "%";
    const val2 = (slider_2.value / maxVal2) * 100 + "%";

    // Dislay the value in the tooltip
    tooltip.innerHTML = (slider.value * 2000000).toLocaleString();
    tooltip_2.innerHTML = (slider_2.value * 1000).toLocaleString();
    // Set the thumb and progress to the current value
    progress.style.width = val;
    progress_2.style.width = val2;
    thumb.style.left = val;
    thumb_2.style.left = val2;
}

customSlider();

// Repeat the function when the slider is selected
slider.addEventListener('input', () => {
    customSlider()
})

slider_2.addEventListener('input', () => {
    customSlider()
})
