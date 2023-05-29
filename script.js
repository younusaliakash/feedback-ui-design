const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

panel.addEventListener('click', (event) => {
    if (event.target.parentNode.classList.contains('rating')) {
        removeActive()
        event.target.parentNode.classList.add('active');
        selectedRating = event.target.nextElementSibling.innerHTML;

    } else if (event.target.parentNode.contains('rating') && event.target.previousSibling && event.previousElementSibling.nodeName === 'IMG') {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>        
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    ratings.forEach((rating, idx) => {
        rating.classList.remove('active')
    })
}
