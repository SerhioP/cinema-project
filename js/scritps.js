const schemeSvg = document.querySelector(".scheme svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
let cost = 800;
let totalPrice = 0;
schemeSvg.addEventListener('click', (Event) =>{
    if(!Event.target.classList.contains('booked')){
        Event.target.classList.toggle('active');
        let totalSets = schemeSvg.querySelectorAll('.active').length;
        totalPrice = totalSets * cost;
        totalPriceTag.textContent=totalPrice;

    }
});
menuButton.addEventListener('click', () =>{
    console.log('куда хуяришь');
    menu.classList.toggle('is-open');
})