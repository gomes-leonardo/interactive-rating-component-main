
const submit = document.querySelector('.submit-btn')
const rateAgain = document.querySelector('.rate-again')

const state = document.querySelector('.state-start')
const thanku = document.querySelector('.thank-you')
const rating= document.getElementById('rating')
const rates = document.querySelectorAll('.style-number')





submit.addEventListener('click', () =>{
    state.classList.add('hide')
    thanku.classList.remove('hide')

})

rateAgain.addEventListener('click', () => {
    thanku.classList.add('hide')
    state.classList.remove('hide')
})


rates.forEach((rate) => {
    rate.addEventListener('click', () => {
    rating.innerHTML = rate.innerHTML
        
    })
})