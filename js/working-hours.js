// Handle click events
document.addEventListener('click', (e) => {
    // Toggle dropdown menu
    if (e.target.closest('.working-hours-dropdown-toggle')) {
        const button = e.target.closest('.working-hours-dropdown-toggle');
        const dropdownMenu = button.nextElementSibling;

        // Close all other active dropdown menus
        document.querySelectorAll('.working-hours-dropdown-menu.active').forEach(menu => {
            if (menu !== dropdownMenu) menu.classList.remove('active');
        });

        dropdownMenu.classList.toggle('active');
    }

    // Handle dropdown item selection
    if (e.target.closest('.working-hours-dropdown-menu ul li')) {
        const item = e.target.closest('.working-hours-dropdown-menu ul li');
        const parentDropdown = item.closest('.working-hours-dropdown-container');
        const toggleButton = parentDropdown.querySelector('.working-hours-dropdown-toggle');

        // Update the button text with selected item
        const textSpan = toggleButton.querySelector('span:nth-child(2)');
        textSpan.textContent = item.textContent;

        // Close the dropdown menu
        parentDropdown.querySelector('.working-hours-dropdown-menu').classList.remove('active');
    }
});

// Handle input search for dropdowns
document.addEventListener('input', (e) => {
    if (e.target.closest('.working-hours-dropdown-search')) {
        const input = e.target;
        const filter = input.value.toLowerCase();
        const dropdownItems = input.closest('.working-hours-dropdown-menu').querySelectorAll('ul li');

        // Filter dropdown items based on input value
        dropdownItems.forEach(item => {
            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }
});

// Add new dropdown row
document.querySelector('.add-new-button').addEventListener('click', () => {
    const dropdownGrid = document.querySelector('.dropdown-grid-container');

    const newRow = document.createElement('div');
    newRow.classList.add('working-hours-dropdown-grid');
    newRow.style = 'margin-top: 10px;';

    // Add the HTML structure for a new dropdown row
    newRow.innerHTML = `
    <div class="working-hours-dropdown-container">
        <button class="working-hours-dropdown-toggle" style="padding: 13.5px 10px">
            <span style="display: flex; align-items: center;">
                <span class="trash-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                        style="color: rgba(255, 149, 0, 1);" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                </span>
                <span>Gün</span>
            </span>
            <span>&#9662;</span>
        </button>
        <div class="working-hours-dropdown-menu">
            <input type="text" class="working-hours-dropdown-search" placeholder="Ara" />
            <ul>
                <li>Hafta içi</li>
                <li>Hafta sonu</li>
                <li>Pazartesi</li>
                <li>Salı</li>
                <li>Çarşamba</li>
            </ul>
        </div>
    </div>
    <div class="working-hours-dropdown-container">
        <button class="working-hours-dropdown-toggle">
            Başlangıç
            <span>&#9662;</span>
        </button>
        <div class="working-hours-dropdown-menu">
            <ul>
                <li>8.00</li>
                <li>8.15</li>
                <li>8.30</li>
                <li>8.45</li>
                <li>9.00</li>
                <li>9.15</li>
            </ul>
        </div>
    </div>
    <div class="working-hours-dropdown-container">
        <button class="working-hours-dropdown-toggle">
            Bitiş
            <span>&#9662;</span>
        </button>
        <div class="working-hours-dropdown-menu">
            <ul>
                <li>8.00</li>
                <li>8.15</li>
                <li>8.30</li>
                <li>8.45</li>
                <li>9.00</li>
                <li>9.15</li>
            </ul>
        </div>
    </div>
    `;

    dropdownGrid.appendChild(newRow);

    // Add event listener to trash button to remove row
    newRow.querySelector('.trash-button').addEventListener('click', () => {
        newRow.remove();
    });
});
