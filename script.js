const nav = document.querySelector("#nav");
const home = document.querySelector("#home");
const date = document.querySelector("#date");
const socials = document.querySelector("#socials");
const logo = document.querySelector("#logo");

const icons = [
    `<a href="#"><img src="assets/homeIcon.png" /></a>`,
    `<a href="about.html"><img src="assets/userIcon.png" /></a>`,
    `<a href="settings.html"><img src="assets/settingsIcon.png" /></a>`,
    `<a href="certificates.html"><img src="assets/certificateIcon.png" /></a>`,
]
const strings = [
    `<div>Home</div>`,
    `About`,
    `Settings`,
    `Certificates`,
]
const logos = [
    `<a href="https://www.facebook.com"><img src="assets/facebookLogo.png"></a>`,
    `<a href="https://www.instagram.com"><img src="assets/instagramLogo.png"></a>`,
    `<a href="https://www.x.com"><img src="assets/twitterLogo.png"></a>`,
    `<a href="https://www.youtube.com"><img src="assets/youtubeLogo.png"></a>`,
    `<a href="https://github.com/4shizzgndlf"><img src="assets/githubLogo.png"></a>`,
]

for (let i = 0; i < logos.length; i++) {
    socials.innerHTML += logos[i];
}

for (let i = 0; i < icons.length; i++) {
    nav.innerHTML += icons[i];
}

home.innerHTML = strings[0];
logo.innerHTML = `<div id="logo">Lucas Hoffmann <br>Christensen</div>`;

function updateClock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let month = date.getMonth(); // 0-11
    let today = date.getDate(); // 1-31
    let year = date.getFullYear(); // 4-digit year
    // Format the date
    let period = date.getHours() >= 12 ? 'PM' : 'AM';


    if (hour >= 12) {
        hour = hour - 12; // Convert to 12-hour format
        if (hour === 0) hour = 12; // Handle midnight case
    }

    // Format the time to always show two digits
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    seconds = seconds < 10 ? '0' + seconds : seconds;


    // Update the clock display
    document.querySelector('.hour').textContent = hour;
    document.querySelector('.minute').textContent = minute;
    document.querySelector('.second').textContent = seconds;
    document.querySelector('.period').textContent = period;


    // Update the date display
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    document.querySelector('.month').textContent = monthNames[month];
    document.querySelector('.today').textContent = today < 10 ? '0' + today : today;
    document.querySelector('.year').textContent = year;

}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately



