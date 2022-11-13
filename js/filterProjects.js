const search = document.getElementById('search');
const projects = Array.from(document.querySelectorAll('.project-card'));
const project = document.querySelector('#project')
const p_location = document.querySelector('#location')
const types_facilities = document.querySelector('#types_facilities')
const city = document.querySelector('#city')

const containerEl = document.querySelectorAll(".range-slider");
const price = containerEl[0].querySelector(".tooltip");
const area = containerEl[1].querySelector(".tooltip");



console.log(filter);
console.log(projects);

const filterProjects = () => {
    let stp = project.value;
    let stl = p_location.value;
    let stt_f = types_facilities.value;
    let stc = city.value;
    let stpr = parseInt(price.innerText);
    let star = parseInt(price.innerText);

    projects.forEach(item => {
        item.style.display = 'none';
    })

    projects.forEach(item => {
        console.log(item.querySelector('h2').innerText.toLowerCase())
        console.log(stp.toLowerCase());

        item.style.display = 'none';
        // alert(parseInt(item.querySelector('.specs .price').innerText) >= stpr - 10000000);
        if((item.querySelector('h2').innerText.toLowerCase().includes(stp.toLowerCase())) || (item.querySelector('.location').innerText.toLowerCase().includes(stl.toLowerCase())) || (item.querySelector('.location').innerText.toLowerCase().includes(stc.toLowerCase()))) {
            console.log('found');
            item.style.display = 'flex';
        }
    })
}

search.addEventListener('click', () => {
   filterProjects();
   document.getElementById('filter-projects').classList.toggle('show')
   
    if(document.getElementById('filter-projects').classList.contains('show')) {
        document.getElementById('filter-button').innerText = 'X'
    } else {
        document.getElementById('filter-button').innerText = 'Filter'
    }
});
