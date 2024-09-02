document.addEventListener("DOMContentLoaded", function() {
    var backgroundContainer = document.createElement('div');
    backgroundContainer.classList.add('background-container');

    backgroundContainer.innerHTML = `
        <div class="background-circle circle-1"></div>
        <div class="background-circle circle-2"></div>
        <div class="background-circle circle-3"></div>
        <div class="background-circle circle-4"></div>
        <div class="background-square square-1"></div>
    `;

    document.body.appendChild(backgroundContainer);
});
