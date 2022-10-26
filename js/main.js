const toggleNavButton = document.querySelector('#toggle-menu');
const miniMenu = document .querySelectorAll('.nav-link .dropdown li span');
const carouselButtonPrev = document.getElementById('carousel-button-prev');
const carouselButtonNext = document.getElementById('carousel-button-next');
const navLinks = document.querySelectorAll('nav .nav-links>.nav-link');
const animatedLink = document.querySelector('.animated-link');
const heading = document.querySelector('#heading')
const caption = document.querySelector('#caption')
const cta = document.querySelector('#cta')


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

miniMenu.forEach(drpdn => {
    drpdn.addEventListener('click', () => {
        console.log('clicked');
        if(window.innerWidth > 992) {
            miniMenu.forEach(drpdn => drpdn.parentElement.classList.remove('active'));
        }
        drpdn.parentElement.classList.toggle('active');
    })
})


// Carousel 
const heroBGs = [
    {
        imgUrl: './Assets/front-view-halimah.jpg',
        link: '',
        to : '',
        heading: 'Discover Amazing Properties in Nigeria',
        caption: ' Finding your dream property just got easier - whether it’s a residential or commercial property.  Our real estate experts will help you operate, negotiate, and arrange the best real estate deals that suit your needs.',
        cta: 'Explore Properties'
    },
    {
        imgUrl: './Assets/aerial-side-view.jpg',
        link: '../pages/halima.html',
        to : 'Halima',
        heading: 'Experience The Best Property Management Services',
        caption: 'Leverage our expert real estate management services to maximize the value of your asset, attract and retain tenants, and improve your property’s efficiency.',
        cta: 'Find Out More'
    },
    {
        imgUrl: './Assets/halima-by-constrix.jpg',
        link: '../pages/halima.html',
        to : 'Halima',
        heading: 'Halima by constrix',
        caption: 'place holder',
        cta: 'Find Out More'
    },
];

let currentBg = 1;

const changeBg = (type) => {
    console.log('background changed', currentBg)
    if(type === 'next') {
        currentBg++;
        if (currentBg+1> heroBGs.length ){
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
    heading.innerText = heroBGs[currentBg].heading;
    caption.innerText = heroBGs[currentBg].caption;
    cta.innerHTML = `${heroBGs[currentBg].cta} <i class="fas fa-arrow-right"></i>`;

}

const timeout = 5000

setInterval(() => {
    changeBg('next')
}, timeout);

carouselButtonNext.addEventListener('click', () => changeBg('next'))

carouselButtonPrev.addEventListener('click', () => changeBg('prev'))
