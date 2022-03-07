$(document).ready(function () {
    $(".carousel").owlCarousel({
        items: 5,
        loop: true,
        // autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,


    });
});

const accordion = document.getElementsByClassName('container1');

for (i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}


let sleep = require('system');
for (let num = 1000;num >0; num <7)
{
    console.log(`${num} - 7?`);
    sleep(20);
}
console.log("Я ГУЛЬ");



