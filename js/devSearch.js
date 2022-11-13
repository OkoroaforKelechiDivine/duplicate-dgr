const form = document.querySelector('.search-bar form');
const list = document.querySelector('.dev-cards');
const input = form.querySelector('input');

const devCards = [
    {
        imgUrl: "../../Assets/logo.svg",
        caption: "City Developers"
    },
    {
        imgUrl: "../../Assets/logo.svg",
        caption: "Town Developers"
    },
    {
        imgUrl: "../../Assets/logo.svg",
        caption: "Cave Developers"
    },
    {
        imgUrl: "../../Assets/logo.svg",
        caption: "Town Developers"
    },
    {
        imgUrl: "../../Assets/logo.svg",
        caption: "Cave Developers"
    },
    {
        imgUrl: "../../Assets/logo.svg",
        caption: "Town Developers"
    },
    {
        imgUrl: "../../Assets/logo.svg",
        caption: "Cave Developers"
    },
    {
        imgUrl: "../../Assets/logo.svg",
        caption: "Land Developers"
    },
    {
        imgUrl: "../../Assets/logo.svg",
        caption: "Cave Developers"
    },
    {
        imgUrl: "../../Assets/logo.svg",
        caption: "Cave Developers"
    },
    {
        imgUrl: "../../Assets/logo.svg",
        caption: "City Developers"
    },
    {
        imgUrl: "../../Assets/logo.svg",
        caption: "City Developers"
    },
]

function displayCards(cards) {
    document.querySelectorAll('.dev-card').forEach(card => card.remove())
    cards.forEach(card => {
        const newCard = document.createElement('a')
        newCard.href = "../city-developers.html"
        newCard.classList.add("dev-card")
        newCard.innerHTML = `
                            <img src=${card.imgUrl} alt=""/>
                            <p class="caption">${card.caption}</p> 
                            `
        list.append(newCard)
    })
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const searchQuery = input.value;
    // Search Functionality Goes here
    const newCards = devCards.filter(card => card.caption.toLowerCase().includes(searchQuery.trim().toLowerCase()))
    console.log(newCards)
    if(newCards.length === 0){
        const text = document.createTextNode("None Found!!")
        list.append(text)
    }

    displayCards(newCards)
    form.querySelector('input').value = "";    
})

displayCards(devCards)