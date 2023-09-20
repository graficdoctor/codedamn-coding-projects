const bigMenu = document.getElementById('big-menu');
const hamburgerToggleBtn = document.getElementById('hamburger-toggle');

hamburgerToggleBtn.addEventListener('click', handleToggleMenu);

function handleToggleMenu() {
	bigMenu.style.transform = 'translateX(0)';
	bigMenu.dataset.open = 'true';
	hamburgerToggleBtn.style.transform = 'translateX(85vw)';
}
