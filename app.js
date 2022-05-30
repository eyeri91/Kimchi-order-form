const infoBtn = document.querySelector('.info-btn')
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close');
const modalContent = document.querySelector('modal-content');


infoBtn.addEventListener('click', openModal);

function openModal() {
    modalContainer.classList.add('show');
}

closeBtn.addEventListener('click', closeModal);

function closeModal() {
    modalContainer.classList.remove('show');
}
