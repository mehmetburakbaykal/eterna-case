// Select circles for both pages
const circlesPage1 = document.querySelectorAll('#circle1, #circle2, #circle3');
const circlesPage2 = document.querySelectorAll('#circle4, #circle5, #circle6');

// Function to move circles to the next page
function animateCirclesToNextPosition() {
    circlesPage1[0].classList.add('circle-move-1');
    circlesPage1[1].classList.add('circle-move-2');
    circlesPage1[2].classList.add('circle-move-3');

    setTimeout(() => {
        window.location.href = 'working-hours.html';
    }, 600);
}

// Function to move circles back to the previous page
function animateCirclesToPreviousPosition() {
    circlesPage2[0].classList.add('circle-back-to-1');
    circlesPage2[1].classList.add('circle-back-to-2');
    circlesPage2[2].classList.add('circle-back-to-3');

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 600);
}

// Event listener for "Next" button
const nextButton = document.getElementById('navigate-working-hours-page-button');
if (nextButton) {
    nextButton.addEventListener('click', animateCirclesToNextPosition);
}

// Event listener for "Back" button
const backButton = document.getElementById('back-to-index-page-button');
if (backButton) {
    backButton.addEventListener('click', animateCirclesToPreviousPosition);
}
