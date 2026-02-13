const nav = document.querySelector("#nav");
const settings = document.querySelector("#settings");
const date = document.querySelector("#date");
const socials = document.querySelector("#socials");
const logo = document.querySelector("#logo");
const welcome = document.querySelector("#welcome");

const icons = [
    `<a href="index.html"><img src="assets/homeIcon.png" /></a>`,
    `<a href="about.html"><img src="assets/userIcon.png" /></a>`,
    `<a href="#"><img src="assets/settingsIcon.png" /></a>`,
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
    `<div>About</div>`,
    `<div>Settings</div>`,
    `<div>Certificate</div>`,
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


settings.innerHTML = strings[3];
logo.innerHTML = `<div id="logo">Lucas Hoffmann <br>Christensen</div>`;
welcome.innerHTML = strings[1];



