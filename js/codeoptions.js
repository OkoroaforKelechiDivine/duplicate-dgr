const currentCountryCode = document.getElementById('current_country_code');
const currentCountryFlag = document.getElementById('current_country_flag');
const countryCodeList = document.querySelector('.cc_dropdown');
const countryCodeOptions = document.querySelectorAll('.country_code');

currentCountryCode.addEventListener('click', () => {
    countryCodeList.classList.toggle('active')
})

countryCodeOptions.forEach(option => {
    option.addEventListener('click', () => {
        currentCountryFlag.src = option.children[0].src;
        currentCountryCode.innerText = option.children[1].innerText;
        console.log(option.children[1].innerText)
        countryCodeList.classList.remove('active');
    })
})