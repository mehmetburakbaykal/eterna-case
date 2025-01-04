document.querySelectorAll('.working-hours-dropdown-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const dropdownMenu = button.nextElementSibling;
        dropdownMenu.classList.toggle('active');
    });
});

document.querySelectorAll('.working-hours-dropdown-menu ul li').forEach(item => {
    item.addEventListener('click', (e) => {
        const parentDropdown = item.closest('.working-hours-dropdown-container');
        const toggleButton = parentDropdown.querySelector('.working-hours-dropdown-toggle');
        const menuItems = parentDropdown.querySelectorAll('ul li');

        menuItems.forEach(menuItem => menuItem.classList.remove('selected'));
        item.classList.add('selected');

        toggleButton.textContent = item.textContent;

        parentDropdown.querySelector('.working-hours-dropdown-menu').classList.remove('active');
    });
});

document.querySelectorAll('.working-hours-dropdown-search').forEach(input => {
    input.addEventListener('input', (e) => {
        const filter = e.target.value.toLowerCase();
        const dropdownItems = e.target.closest('.working-hours-dropdown-menu').querySelectorAll('ul li');

        dropdownItems.forEach(item => {
            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


// Select back button
const button = document.getElementById('back-to-index-page-button');

button.addEventListener('click', () => {
    window.location.href = 'index.html';
});