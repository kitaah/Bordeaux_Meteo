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

// HOME PAGE - Leaflet map
let bordeauxMeteoMap = L.map('map').setView([44.865210, -0.577260], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(bordeauxMeteoMap);

let firstSensor = L.circle([44.876945, -0.557332], {
    color: '#861010',
    fillColor: '#ff0000',
    fillOpacity: 0.5,
    radius: 70
}).addTo(bordeauxMeteoMap);

let secondSensor = L.circle([44.862936, -0.602281], {
    color: '#0f0fac',
    fillColor: '#0000ff',
    fillOpacity: 0.5,
    radius: 70
}).addTo(bordeauxMeteoMap);

let thirdSensor = L.circle([44.848361, -0.560828], {
    color: '#0c570c',
    fillColor: '#008000',
    fillOpacity: 0.5,
    radius: 70
}).addTo(bordeauxMeteoMap);


















