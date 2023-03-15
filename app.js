const hamIcon = document.querySelector(".ham-icon");
const closeIcon = document.querySelector(".close-icon");
const dropMenu = document.querySelector(".drop-menu");
const mask = document.querySelector(".mask");
const heroImgSource = document.querySelector(".hero-img picture source");
const heroImg = document.querySelector(".hero-img picture img");
const heroDescriptTitle = document.querySelector(".hero-descript h1");
const heroDescriptPara = document.querySelector(".hero-descript p");

// functionality for drop down menu.
hamIcon.addEventListener("click", () => {
  dropMenu.classList.toggle("drop-menu-active");
  mask.classList.toggle("hidden");
});

closeIcon.addEventListener("click", () => {
  mask.classList.toggle("hidden");
  dropMenu.classList.toggle("drop-menu-active");
});

// functionality for image updating and hero descript changing with transition effect.
setTimeout(() => {
  heroImg.classList.remove("fade-in");
}, 4000);

let imageNum = 1;

setInterval(() => {
  imageNum++;
  if (imageNum > 3) imageNum = 1;
  heroImgSource.setAttribute(
    "srcset",
    `./images/desktop-image-hero-${imageNum}.jpg`
  );
  heroImg.src = `./images/mobile-image-hero-${imageNum}.jpg`;

  heroImg.classList.add("fade-in");
  setTimeout(() => {
    heroImg.classList.remove("fade-in");
  }, 4000);

  if (imageNum === 1) {
    heroDescriptTitle.innerText = "Discover innovative ways to decorate";
    heroDescriptPara.innerText = `We provide unmatched quality, comfort, and style for property owners across the country.
    Our experts combine form and function in bringing your vision to life. Create a room in your
    own style with our collection and make your property a reflection of you and what you love.`;
  }

  if (imageNum === 2) {
    heroDescriptTitle.innerText = "We are available all across the globe";
    heroDescriptPara.innerText = `With stores all over the world, it's easy for you to find furniture for your home or place of business.
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
    store locator. Any questions? Don't hesitate to contact us today.`;
  }
  if (imageNum === 3) {
    heroDescriptTitle.innerText = "Manufactured with the best materials";
    heroDescriptPara.innerText = `  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
    to ensure that every product is made as perfect and as consistent as possible. With three decades of
    experience in this industry, we understand what customers want for their home and office.`;
  }
}, 5000);
