// Filter functionality
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const projects = document.querySelectorAll('.project-card');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const checked = [...checkboxes].filter(cb => cb.checked).map(cb => cb.value);

    projects.forEach(project => {
      const matches = checked.length === 0 || checked.some(c => project.classList.contains(c));
      project.style.display = matches ? 'block' : 'none';
    });
  });
});
