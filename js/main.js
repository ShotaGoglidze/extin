let menuBtn = document.querySelector('.menu');
let Line1 = document.querySelector('.menu-line1');
let Line2 = document.querySelector('.menu-line2');
let Line3 = document.querySelector('.menu-line3');
let nav = document.querySelector('nav');
let image = document.querySelector('.image');


menuBtn.addEventListener("click", function () {
    if(nav.classList.toggle("active")){
        Line2.style.opacity = '0';
        Line1.style.transform = 'translateY(19px) rotate(45deg)';
        Line1.style.width = '50px';
        Line3.style.transform = 'translateY(-12px) rotate(-45deg)';
        Line3.style.width = '50px';
        Line1.style.backgroundColor = "yellow";
        Line3.style.backgroundColor = "yellow";
    }else{
        Line2.style.opacity = '1';
        Line1.style.transform = 'translateY(0) rotate(0)';
        Line1.style.width = '40px';
        Line3.style.transform = 'translateY(0) rotate(0)';
        Line3.style.width = '40px';
        Line1.style.backgroundColor = "white";
        Line3.style.backgroundColor = "white";
    }
  });
  

document.addEventListener('scroll', function () {
    image.style.marginLeft = '0';
})
