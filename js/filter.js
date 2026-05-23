// filter.js — Member 5
// Live search filter for equipment pages

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('equipment-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.equipment-card');

    cards.forEach(card => {
      const name = card.querySelector('.eq-name')?.textContent.toLowerCase() || '';
      const target = card.querySelector('.eq-target')?.textContent.toLowerCase() || '';
      const steps = card.querySelector('.eq-steps')?.textContent.toLowerCase() || '';

      const match = name.includes(query) || target.includes(query) || steps.includes(query);
      card.style.display = match ? '' : 'none';
    });

    // Show "no results" if all hidden
    let noResults = document.getElementById('no-results');
    const allHidden = [...cards].every(c => c.style.display === 'none');
    if (allHidden && query) {
      if (!noResults) {
        noResults = document.createElement('p');
        noResults.id = 'no-results';
        noResults.style.cssText = 'grid-column:1/-1;text-align:center;color:#666;padding:40px;font-size:14px;letter-spacing:1px;text-transform:uppercase;';
        noResults.textContent = 'No equipment found';
        document.querySelector('.equipment-grid').appendChild(noResults);
      }
    } else if (noResults) {
      noResults.remove();
    }
  });
});
