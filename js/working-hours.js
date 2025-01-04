document.addEventListener('click', (e) => {
    if (e.target.closest('.working-hours-dropdown-toggle')) {
        const button = e.target.closest('.working-hours-dropdown-toggle');
        const dropdownMenu = button.nextElementSibling;

        document.querySelectorAll('.working-hours-dropdown-menu.active').forEach(menu => {
            if (menu !== dropdownMenu) menu.classList.remove('active');
        });

        dropdownMenu.classList.toggle('active');
    }

    if (e.target.closest('.working-hours-dropdown-menu ul li')) {
        const item = e.target.closest('.working-hours-dropdown-menu ul li');
        const parentDropdown = item.closest('.working-hours-dropdown-container');
        const toggleButton = parentDropdown.querySelector('.working-hours-dropdown-toggle');
        const menuItems = parentDropdown.querySelectorAll('ul li');

        menuItems.forEach(menuItem => menuItem.classList.remove('selected'));
        item.classList.add('selected');

        toggleButton.textContent = item.textContent;

        parentDropdown.querySelector('.working-hours-dropdown-menu').classList.remove('active');
    }
});

document.addEventListener('input', (e) => {
    if (e.target.closest('.working-hours-dropdown-search')) {
        const input = e.target;
        const filter = input.value.toLowerCase();
        const dropdownItems = input.closest('.working-hours-dropdown-menu').querySelectorAll('ul li');

        dropdownItems.forEach(item => {
            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }
});


document.querySelector('.add-new-button').addEventListener('click', () => {
    const dropdownGrid = document.querySelector('.dropdown-grid-container');

    const newRow = document.createElement('div');
    newRow.classList.add('working-hours-dropdown-grid');
    newRow.style = 'margin-top: 10px;'

    newRow.innerHTML = `
    <div class="working-hours-dropdown-container">
                        <button class="working-hours-dropdown-toggle">
                            Gün
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

    newRow.querySelector('.trash-button').addEventListener('click', () => {
        newRow.remove();
    });
});

// Select back button
const button = document.getElementById('back-to-index-page-button');

button.addEventListener('click', () => {
    window.location.href = 'index.html';
});