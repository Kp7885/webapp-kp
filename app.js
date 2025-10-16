// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const searchInput = document.getElementById('search');
const projects = document.querySelectorAll('.project-card');
const countDisplay = document.getElementById('count');

// Filter + Search Functionality
function filterProjects() {
  const checked = [...checkboxes].filter(cb => cb.checked).map(cb => cb.value);
  const searchText = searchInput.value.toLowerCase();
  let visibleCount = 0;

  projects.forEach(project => {
    const matchesCategory = checked.length === 0 || checked.some(c => project.classList.contains(c));
    const matchesSearch = project.dataset.title.toLowerCase().includes(searchText);

    if (matchesCategory && matchesSearch) {
      project.style.display = "block";
      project.style.opacity = "1";
      visibleCount++;
    } else {
      project.style.display = "none";
      project.style.opacity = "0";
    }
  });

  countDisplay.textContent = visibleCount;
}

checkboxes.forEach(cb => cb.addEventListener('change', filterProjects));
searchInput.addEventListener('input', filterProjects);
