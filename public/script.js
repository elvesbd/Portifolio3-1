const modalOverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
    const paginaId = card.getAttribute("id")
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src=`https://rocketseat.com.br/${paginaId}`;
    })
}

const closeModal = document.querySelector('.close_modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})

const modal = document.querySelector('.modal')
const mod = document.querySelectorAll('.max_modal')

for ( let max_modal of mod) {
    max_modal.addEventListener("click", function(){
        modal.classList.add('modal_max')
        modal.classList.remove('modal_min')
    })
}

const minimiza = document.querySelector('.modal')
const min = document.querySelectorAll('.min_modal')

for ( let min_modal of min) {
    min_modal.addEventListener('click', function(){
        minimiza.classList.add('modal_min')||
        modal.classList.remove('modal_max')
    })
}




