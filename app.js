const form = document.getElementById('filterForm');
const items = Array.from(document.querySelectorAll('#items li'));

function applyFilter() {
  const checked = Array.from(form.elements['category'])
                     .filter(i => i.checked)
                     .map(i => i.value);
  if (checked.length === 0) {
    // show all
    items.forEach(i => i.style.display = '');
    return;
  }
  items.forEach(li => {
    const cat = li.dataset.category;
    li.style.display = checked.includes(cat) ? '' : 'none';
  });
}

form.addEventListener('change', applyFilter);
document.addEventListener('DOMContentLoaded', applyFilter);
