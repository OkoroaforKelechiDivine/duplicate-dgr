const form = document.querySelector('.search-bar form');
const list = document.querySelector('.dev-cards');
const input = form.querySelector('input');

const devCards = [
    {
        imgUrl: "../../folders/BAMPROPERTIES/BAM_logo.png",
        caption: "Bam properties",
        link: "../developers/bam-properties.html"
    },
    {
        imgUrl: "../../folders/BILAADREALTY/bilaald.jpg",
        caption: "Bilaad Realty",
        link: "../developers/bilaald-realty.html"
    },
    {
        imgUrl: "../../folders/CONSTRIX/Constrix_logo.jpg",
        caption: "Constrix",
        link: "../developers/constrix.html"
    },
    {
        imgUrl: "../../folders/COSGROVE/Cosgrove.jpg",
        caption: "CosGrove",
        link: "../developers/cosgrove.html"
    },
    {
        imgUrl: "../../folders/DANTATA_TOWN_DEVELOPMENT/DANTATA-GARDEN.jpg",
        caption: "Dantata Town Development",
        link: "../developers/dantata.html"
    },
    {
        imgUrl: "../../folders/PRIMEROSELAGOS/Primrose.jpg",
        caption: "Primerose Lagos",
        link: "../developers/prime-lagos.html"
    },
    {
        imgUrl: "../../folders/URBAN_SHELTER/Urban_shelter.jpg",
        caption: "Urban Shelter",
        link: "../developers/urban-shelter.html"
    }
]
function displayCards(cards) {
    document.querySelectorAll('.dev-card').forEach(card => card.remove())
    cards.forEach(card => {
        const newCard = document.createElement('a')
        //For everytime it's get any object from the devCards, it picks the 'link' and assign it with the object
        newCard.href = card.link
        newCard.classList.add("dev-card")
        newCard.innerHTML = `
                            <img src=${card.imgUrl} alt=""/>
                            <p class="caption">${card.caption}</p> 
                            `
        list.append(newCard)
})}

displayCards(devCards)

form.addEventListener('submit', e => {
    e.preventDefault();
    const searchQuery = input.value
    const newCards = devCards.filter(card => card.caption.toLowerCase().includes(searchQuery.trim().toLowerCase()))
    displayCards(newCards)
    form.querySelector('input').value = "";   
})