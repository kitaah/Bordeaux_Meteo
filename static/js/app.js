// LAYOUT PAGE - Hamburger fold-out menu 
document.addEventListener("DOMContentLoaded", () => {
	let burgerBtn = document.querySelector('#burger-btn__header i');	
	let menu = document.querySelector('#burger_header nav ul');

    burgerBtn?.addEventListener("click", () => {
		menu.classList.toggle('active');
		burgerBtn.classList.toggle('bi-microsoft');
		burgerBtn.classList.toggle('bi-x-lg');
    });
});

// USER LAYOUT PAGE - Hamburger fold-out menu 
document.addEventListener("DOMContentLoaded", () => {
	let burgerBtnUser = document.querySelector('#burger-btn__header-user i');	
	let menuUser = document.querySelector('#burger_header-user nav ul');

    burgerBtnUser?.addEventListener("click", () => {
		menuUser.classList.toggle('active');
		burgerBtnUser.classList.toggle('bi-microsoft');
		burgerBtnUser.classList.toggle('bi-x-lg');
    });
});

// HEADER - Changing logo on mouseover/ on mouseout
document.addEventListener("DOMContentLoaded",() => {
    let headerLogo = document.getElementsByClassName("bordeaux-meteo__logo")[0];

    headerLogo?.addEventListener("mouseover", () => {
        if(headerLogo.src="BM_white_logo.png") {
        headerLogo.src="static/img/BM_color_logo.png"};
    });

	headerLogo?.addEventListener("mouseout", () => {
        if(headerLogo.src="BM_color_logo.png") {
        headerLogo.src="static/img/BM_white_logo.png"};
    });
});

// FOOTER - Changing logo on mouseover/ on mouseout
document.addEventListener("DOMContentLoaded",() => {
    let headerLogo = document.getElementsByClassName("bordeaux-meteo__logo-mobile")[0];

    headerLogo?.addEventListener("mouseover", () => {
        if(headerLogo.src="BM_white_logo.png") {
        headerLogo.src="static/img/BM_color_logo.png"};
    });

	headerLogo?.addEventListener("mouseout", () => {
        if(headerLogo.src="BM_color_logo.png") {
        headerLogo.src="static/img/BM_white_logo.png"};
    });
});










