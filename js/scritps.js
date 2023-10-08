const schemeSvg = document.querySelector(".scheme svg");
const totalPriceTag = document.querySelector(".price-total");
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
