const form = document.querySelector('.search-bar form');
const list = document.querySelector('.dev-cards');
const input = form.querySelector('input');

const devCards = [
    {
        imgUrl: "../../folders/BAMPROPERTIES/BAM_logo.png",
        caption: "Bam properties",
        href: "../bam-properties.html"
    },
    {
        imgUrl: "../../folders/BILAADREALTY/bilaald.jpg",
        caption: "Bilaad Realty",
        href: "../bilaald-realty.html"

    },
    {
        imgUrl: "../../folders/CONSTRIX/Constrix_logo.jpg",
        caption: "Constrix"
    },
    {
        imgUrl: "../../folders/COSGROVE/Cosgrove.jpg",
        caption: "CosGrove"
    },
    {
        imgUrl: "../../folders/DANTATA_TOWN_DEVELOPMENT/DANTATA-GARDEN.jpg",
        caption: "Dantata Town Development"
    },
    {
        imgUrl: "../../folders/PRIMEROSELAGOS/Primrose.jpg",
        caption: "Primerose Lagos"
    },
    {
        imgUrl: "../../folders/URBAN_SHELTER/Urban_shelter.jpg",
        caption: "Urban Shelter"
    }
]

function displayCards(cards) {
    document.querySelectorAll('.dev-card').forEach(card => card.remove())
    cards.forEach(card => {
        const newCard = document.createElement('a')
        newCard.href = "../bam-properties.html"
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
    displayCards(newCards)
    form.querySelector('input').value = "";
})

displayCards(devCards)