// Function for Live Search
function filterBooks() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const bookCards = document.querySelectorAll('.book-card');

  bookCards.forEach(card => {
    const title = card.querySelector('.book-title').textContent.toLowerCase();
    const author = card.querySelector('.book-author').textContent.toLowerCase();
    const desc = card.querySelector('.book-desc').textContent.toLowerCase();

    if (title.includes(input) || author.includes(input) || desc.includes(input)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Function for Category Buttons Filtering
function filterCategory(category) {
  const bookCards = document.querySelectorAll('.book-card');
  const buttons = document.querySelectorAll('.filter-btn');

  // Update active state on buttons
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  bookCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');

    if (category === 'all' || cardCategory === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Real-time search as user types
document.getElementById('searchInput').addEventListener('keyup', filterBooks);