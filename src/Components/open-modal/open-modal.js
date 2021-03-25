import './open-modal.css'

export const openModal = () => {
    const myModal = document.getElementById('myModal');
    const overlay = document.getElementById('overlay');

    myModal.style.display = 'block';
    overlay.style.display = 'block';

    window.addEventListener('click', (e) => {
        if (overlay.contains(e.target)) {
            myModal.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
};