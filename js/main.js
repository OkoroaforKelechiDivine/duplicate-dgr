const toggleNavButton = document.querySelector('#toggle-menu');
const miniMenu = document .querySelectorAll('.nav-link .dropdown li span');
// const navLinks = document.querySelectorAll('.nav-link');

// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         link.classList.toggle('active');
//     })
// })

console.log(window.innerWidth)

miniMenu.forEach(drpdn => {
    drpdn.addEventListener('click', () => {
        console.log('clicked');
        if(window.innerWidth > 1400) {
            miniMenu.forEach(drpdn => drpdn.parentElement.classList.remove('active'));
        }
        drpdn.parentElement.classList.toggle('active');
    })
})

toggleNavButton.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
})