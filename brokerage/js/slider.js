const container = document.querySelectorAll(".range-slider");

const slider = container[0].querySelector(".slider");
const thumb = container[0].querySelector(".slider-thumb");
const tooltip = container[0].querySelector(".tooltip");
const progress = container[0].querySelector(".progress");

const slider_2 = container[1].querySelector(".slider");
const thumb_2 = container[1].querySelector(".slider-thumb");
const tooltip_2 = container[1].querySelector(".tooltip");
const progress_2 = container[1].querySelector(".progress");

const filterToggle = document.getElementById('filter');

filterToggle.addEventListener('click' , () => {
    document.getElementById('filter-projects').classList.toggle('show')
    if(document.getElementById('filter-projects').classList.contains('show')) {
        document.getElementById('filter-button').innerText = 'X'
    } else {
        document.getElementById('filter-button').innerText = 'Filter'
    }
})

function customSlider() {
    // Get by percentage.
    const maxVal = slider.getAttribute("max");
    const maxVal2 = slider_2.getAttribute("max");
    const val = (slider.value / maxVal) * 100 + "%";
    const val2 = (slider_2.value / maxVal2) * 100 + "%";

    // Display the value in the tooltip
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
