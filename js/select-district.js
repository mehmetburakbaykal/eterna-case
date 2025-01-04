// Select the dropdown button, dropdown content, input field, and list options
const dropdownButton = document.getElementById('dropdown-button');
const dropdownContent = document.getElementById('dropdown-content');
const dropdownInput = document.getElementById('dropdown-input');
const dropdownOptions = document.getElementById('dropdown-options').getElementsByTagName('li');

// Function to toggle the visibility of the dropdown content
function toggleDropdown() {
    const isDisplayed = dropdownContent.style.display === 'block';
    dropdownContent.style.display = isDisplayed ? 'none' : 'block';
}

// Function to filter dropdown options based on input value
function filterOptions() {
    const filter = dropdownInput.value.toLowerCase();
    for (let i = 0; i < dropdownOptions.length; i++) {
        const text = dropdownOptions[i].textContent || dropdownOptions[i].innerText;
        dropdownOptions[i].style.display = text.toLowerCase().includes(filter) ? '' : 'none';
    }
}

// Close the dropdown content when clicking outside the dropdown container
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-container')) {
        dropdownContent.style.display = 'none';
    }
});

// Select next button
const button = document.getElementById('navigate-working-hours-page-button');

button.addEventListener('click', () => {
    window.location.href = 'working-hours.html';
});
