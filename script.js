// NAVBAR EFFECT

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    nav.style.background = "#000";
    nav.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";

  }

  else{

    nav.style.background = "rgba(0,0,0,0.4)";
    nav.style.boxShadow = "none";

  }

});


// PARALLAX EFFECT

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

  let scroll = window.scrollY;

  heroImage.style.transform =
  `translateY(${scroll * 0.2}px)`;

});


// SCROLL REVEAL

const reveals = document.querySelectorAll(
  ".about-box, .skill, .card, .contact-box"
);

window.addEventListener("scroll", revealElements);

revealElements();

function revealElements(){

  for(let i = 0; i < reveals.length; i++){

    let windowHeight = window.innerHeight;

    let revealTop =
    reveals[i].getBoundingClientRect().top;

    let revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      reveals[i].style.opacity = "1";

      reveals[i].style.transform =
      "translateY(0)";

    }

  }

}