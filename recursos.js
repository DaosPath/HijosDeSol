document.getElementById('search-input').addEventListener('input', filterBooks);

function filterBooks() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const books = document.querySelectorAll('.book-card, .comic-card');

    books.forEach(book => {
        const title = book.getAttribute('data-title').toLowerCase();
        const genre = book.getAttribute('data-genre').toLowerCase();
        const author = book.getAttribute('data-author').toLowerCase();

        if (title.includes(searchInput) || genre.includes(searchInput) || author.includes(searchInput)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
}

const modal = document.getElementById('myModal');
const modalTitle = document.getElementById('modal-title');
const modalAuthor = document.getElementById('modal-author');
const modalDescription = document.getElementById('modal-description');
const modalDownload = document.getElementById('modal-download');
const modalCover = document.getElementById('modal-cover');
const modalLectura = document.getElementById('modal-lectura');
const span = document.getElementsByClassName('close')[0];

document.querySelectorAll('.book-card, .comic-card').forEach(book => {
    book.addEventListener('click', () => {
        modalTitle.textContent = book.getAttribute('data-title');
        modalAuthor.textContent = "Autor: " + book.getAttribute('data-author');
        modalDescription.textContent = book.getAttribute('data-description');
        modalCover.src = book.getAttribute('data-cover');

        if (book.classList.contains('comic-card')) {
            modalDownload.style.display = 'none'; // Ocultar el botón de descarga para cómics
            modalLectura.href = book.getAttribute('data-lectura');
        } else {
            modalDownload.style.display = 'block'; // Mostrar el botón de descarga para libros
            modalDownload.href = book.getAttribute('data-download');
            modalLectura.href = `lectura.html?book=${book.getAttribute('data-download').split('/').pop()}`;
        }

        modal.style.display = 'flex';
        modal.classList.remove('hidden');
    });
});

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

window.addEventListener('load', () => {
    if (document.body.classList.contains('fade-in')) {
        setTimeout(() => {
            document.body.classList.remove('fade-in');
        }, 500);
    }
});
