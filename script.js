const nav = document.querySelector("#nav");
const home = document.querySelector("#home");
const socials = document.querySelector("#socials");
const logo = document.querySelector("#logo");
const welcome = document.querySelector("#welcome");
const customComponents = document.querySelector("#customComponents");

const icons = [
    `<a href="#"><img src="assets/homeIcon.png" /></a>`,
    `<a href="about.html"><img src="assets/userIcon.png" /></a>`,
    `<a href="settings.html"><img src="assets/settingsIcon.png" /></a>`,
    `<a href="certificates.html"><img src="assets/certificateIcon.png" /></a>`
];
const strings = [
    `<div>Home</div>`,
    `<div>Welcome to my page. I make websites, custom components and 2d games for my customers. To get a price on some 
    of my work fill out the form below. If I built your website you can buy custom components from me. In that way 
    can upgrade your website with me - it never gets outdated. Otherwise, I have to build a brand-new website for you.</div>`,
    `<a href="#customComponents">Custom components</a>`,
    `<div>About</div>`,
    `<div>Settings</div>`,
    `<div>Certificate</div>`
];
const logos = [
    `<a href="https://www.facebook.com"><img src="assets/facebookLogo.png"></a>`,
    `<a href="https://www.instagram.com"><img src="assets/instagramLogo.png"></a>`,
    `<a href="https://www.x.com"><img src="assets/twitterLogo.png"></a>`,
    `<a href="https://www.youtube.com"><img src="assets/youtubeLogo.png"></a>`,
    `<a href="https://github.com/4shizzgndlf"><img src="assets/githubLogo.png"></a>`
];

for (let i = 0; i < logos.length; i++) socials.innerHTML += logos[i];
for (let i = 0; i < icons.length; i++) nav.innerHTML += icons[i];

home.innerHTML = strings[0];
logo.innerHTML = `<div id="logo">Lucas Hoffmann <br>Christensen</div>`;
welcome.innerHTML = strings[1];
customComponents.innerHTML = strings[2];

/* ---------------------- Image Carousel ---------------------- */
const slide = document.querySelector("#slide");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

const images = ["assets/galaxy.jpeg", "assets/galaxy2.jpg"];
let currentIndex = 0;

function showImage(index) {
    slide.style.opacity = 0;
    setTimeout(() => {
        slide.src = images[index];
        slide.style.opacity = 1;
    }, 200);
}

rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});
