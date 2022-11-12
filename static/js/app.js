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

// HOME PAGE - Share buttons on social media
document.addEventListener("DOMContentLoaded",() => {
    let link = encodeURI(window.location.href);
    let message = encodeURIComponent("Voici le dernier relevé météo de Bordeaux !");
    let title = encodeURIComponent("Dernier relevé météo de Bordeaux ☀️");

    let facebook = document.querySelector('.facebook')
    facebook.href = `https://www.facebook.com/share.php?u=${link}`;

    let twitter = document.querySelector('.twitter');
    twitter.href = `http://twitter.com/share?&url=${link}&text=${message}&hashtags=BordeauxMétéo,température,humidité`;

    let reddit = document.querySelector('.reddit');
    reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`;
});













