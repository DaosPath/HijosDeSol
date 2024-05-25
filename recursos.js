document.getElementById('search-input').addEventListener('input', filterBooks);

function filterBooks() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const books = document.querySelectorAll('.book-card');

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
const span = document.getElementsByClassName('close')[0];

document.querySelectorAll('.book-card').forEach(book => {
    book.addEventListener('click', () => {
        modalTitle.textContent = book.getAttribute('data-title');
        modalAuthor.textContent = "Autor: " + book.getAttribute('data-author');
        modalDescription.textContent = book.getAttribute('data-description');
        modalDownload.href = book.getAttribute('data-download');
        modalCover.src = book.getAttribute('data-cover');
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

document.querySelectorAll('.prelectura-button').forEach(button => {
    button.addEventListener('click', () => {
        const bookCard = button.closest('.book-card');
        const pdfUrl = bookCard.getAttribute('data-download');
        window.open(`lectura.html?pdf=${encodeURIComponent(pdfUrl)}`, '_blank');
    });
});
