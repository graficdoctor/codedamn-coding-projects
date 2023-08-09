const navHeader = document.getElementById('nav-header');
const navContainer = document.getElementById('nav-container');
const navToggle = document.getElementById('nav-toggle');
const formButton = document.getElementById('form-button');

formButton.addEventListener('click', (e) => e.preventDefault());

navToggle.addEventListener('click', function () {
	navHeader.classList.toggle('show-items');
	navContainer.classList.toggle('show-items');
});
