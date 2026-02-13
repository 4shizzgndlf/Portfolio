const nav = document.querySelector("#nav");
const about = document.querySelector("#about");
const date = document.querySelector("#date");
const socials = document.querySelector("#socials");
const logo = document.querySelector("#logo");
const welcome = document.querySelector("#welcome");

const icons = [
    `<a href="index.html"><img src="assets/homeIcon.png" /></a>`,
    `<a href="#"><img src="assets/userIcon.png" /></a>`,
    `<a href="settings.html"><img src="assets/settingsIcon.png" /></a>`,
    `<a href="certificates.html"><img src="assets/certificateIcon.png" /></a>`,
]
const strings = [
    `<div>Home</div>`,
    `<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.</div>`,
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


about.innerHTML = strings[2];
logo.innerHTML = `<div id="logo">Lucas Hoffmann <br>Christensen</div>`;
welcome.innerHTML = strings[1];

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



