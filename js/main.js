const toggleNavButton = document.querySelector('#toggle-menu');
const miniMenu = document .querySelectorAll('.nav-link .dropdown li span');

miniMenu.forEach(drpdn => {
    drpdn.addEventListener('click', () => {
        console.log('clicked')
        drpdn.parentElement.classList.toggle('active');
    })
})

toggleNavButton.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
})