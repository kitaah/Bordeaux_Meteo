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
    let headerLogo = document.getElementsByClassName("bordeaux-meteo__logo-responsive")[0];

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
document.addEventListener("DOMContentLoaded",() => {
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
});

// HOME PAGE - Icons & text changing (temperature & humidity)
document.addEventListener("DOMContentLoaded",() => {
let tempData = document.getElementById("temperature__data");
let textTempData = tempData.innerHTML
let tempIcon = document.getElementsByClassName("fa-temperature-three-quarters")[0];
let tempNumber = Number(textTempData)
let tempNextData = document.getElementById("temperature-info__sentence");
let bordeauxMeteoIcon = document.getElementsByClassName("bordeaux-meteo__small-logo")[0];
    if(tempNumber < 0) {
        tempIcon.style.color = "var(--first-temp-color)";
        tempNextData.textContent = "Température extrêment faible";
        bordeauxMeteoIcon.classList.add("color-green-one");
    }

    if(tempNumber >= 0 && tempNumber < 5) {
        tempIcon.style.color = "var(--second-temp-color)";
        tempNextData.textContent = "Très faible température";
        bordeauxMeteoIcon.classList.add("color-green-two");
    }

    if(tempNumber > 5 && tempNumber < 10) {
        tempIcon.style.color = "var(--third-temp-color)";
        tempNextData.textContent = "Faible température";
        bordeauxMeteoIcon.classList.add("color-green-three");
    }

    if(tempNumber > 10 && tempNumber < 15) {
        tempIcon.style.color = "var(--fourth-temp-color)";
        tempNextData.textContent = "Température modérément faible";
        bordeauxMeteoIcon.classList.add("color-green-four");
    }

    if(tempNumber > 15 && tempNumber < 20) {
        tempIcon.style.color = "var(--fifth-temp-color)";
        tempNextData.textContent = "Température moyenne";
        bordeauxMeteoIcon.classList.add("color-yellow-one");
    }

    if(tempNumber > 20 && tempNumber < 25) {
        tempIcon.style.color = "var(--sixth-temp-color)";
        tempNextData.textContent = "Température plus que moyenne";
        bordeauxMeteoIcon.classList.add("color-yellow-one");
    }

    if(tempNumber > 25 && tempNumber < 30) {
        tempIcon.style.color = "var(--seventh-temp-color)";
        tempNextData.textContent = "Température élevée";
        bordeauxMeteoIcon.classList.add("color-red-one");
    }

    if(tempNumber > 30 && tempNumber < 35) {
        tempIcon.style.color = "var(--eighth-temp-color)";
        tempNextData.textContent = "Température élevée";
        bordeauxMeteoIcon.classList.add("color-red-two");
    }

    if(tempNumber > 35 && tempNumber < 40) {
        tempIcon.style.color = "var(--ninth-temp-color)";
        tempNextData.textContent = "Température très élevée";
        bordeauxMeteoIcon.classList.add("color-red-three");
    }

    if(tempNumber > 40 && tempNumber < 45) {
        tempIcon.style.color = "var(--tenth-temp-color)";
        tempNextData.textContent = "Température extrêment élevée";
        bordeauxMeteoIcon.classList.add("color-red-four");
    }
}); 

document.addEventListener("DOMContentLoaded",() => {
let humData = document.getElementById("humidity__data");
let textHumData = humData.innerHTML;
let humIcon = document.getElementsByClassName("fa-droplet")[0];
let humNumber = Number(textHumData);
let humNextData = document.getElementById("humidity-info__sentence");
let bordeauxMeteoIcon = document.getElementsByClassName("bordeaux-meteo__small-logo")[0];
    if(humNumber >= 0 && humNumber < 10) {
        humIcon.style.color = "var(--first-hum-color)";
        humNextData.textContent = "Humidité extrêment faible";
        bordeauxMeteoIcon.classList.add("border-one");
    }

    if(humNumber > 10 && humNumber < 20) {
        humIcon.style.color = "var(--second-hum-color)";
        humNextData.textContent = "Très Faible humidité";
        bordeauxMeteoIcon.classList.add("border-two");
    }

    if(humNumber > 20 && humNumber < 30) {
        humIcon.style.color = "var(--third-hum-color)";
        humNextData.textContent = "Faible humidité";
        bordeauxMeteoIcon.classList.add("border-three");
    }

    if(humNumber > 30 && humNumber < 40) {
        humIcon.style.color = "var(--fourth-hum-color)";
        humNextData.textContent = "Assez faible humidité";
        bordeauxMeteoIcon.classList.add("border-four");
    }

    if(humNumber > 40 && humNumber < 50) {
        humIcon.style.color = "var(--fifth-hum-color)";
        humNextData.textContent = "Humidité moyenne";
        bordeauxMeteoIcon.classList.add("border-five");
    }

    if(humNumber > 50 && humNumber < 60) {
        humIcon.style.color = "var(--sixth-hum-color)";
        humNextData.textContent = "Humidité plus que moyenne";
        bordeauxMeteoIcon.classList.add("border-six");
    }

    if(humNumber > 60 && humNumber < 70) {
        humIcon.style.color = "var(--seventh-hum-color)";
        humNextData.textContent = "Humidité assez élevée";
        bordeauxMeteoIcon.classList.add("border-seven");
    }

    if(humNumber > 70 && humNumber < 80) {
        humIcon.style.color = "var(--eighth-hum-color)";
        humNextData.textContent = "Humidité élevée";
        bordeauxMeteoIcon.classList.add("border-eight");
    }

    if(humNumber > 80 && humNumber < 90) {
        humIcon.style.color = "var(--ninth-hum-color)";
        humNextData.textContent = "Humidité très élevée";
        bordeauxMeteoIcon.classList.add("border-nine");
    }

    if(humNumber > 90 && humNumber <= 100) {
        humIcon.style.color = "var(--tenth-hum-color)";
        humNextData.textContent = "Humidité extrêment élevée";
        bordeauxMeteoIcon.classList.add("border-ten");
    }
}); 

// HOME PAGE - Chart.js 
document.addEventListener("DOMContentLoaded",() => { 
    let ctx = document.getElementById("chart").getContext('2d');
    let data = {
        labels: ["juin", "juillet", "août", "septembre","octobre", "novembre"],
        datasets: [{
            label: "Température",
            backgroundColor: "#ff0000",
            borderColor: "#cc0000",
            borderWidth: 2,
            data: [24,28,32,28,22,17]
            },  
        {
            label: "Humidité",
            backgroundColor: "#0e7adb",
            borderColor: "#1b5488",
            borderWidth: 2,
            data: [50,52,68,77,86,89]
            }
        ] 
    }

    let config = {
        type: 'line',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Evolution au cours des 6 derniers mois",
                    padding: {
                    top: 10,
                    bottom: 20
                    },
                    font: {
                    size: 16,
                    family: 'Helvetica Neue',
                    }
                }
            }
        }
    }
    let graph = new Chart(ctx, config);
});



























