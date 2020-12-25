

var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 50,
    height: 100,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },


});

new SimpleBar(document.getElementById('realizm'));

new SimpleBar(document.getElementById('impresion'));

new SimpleBar(document.getElementById('postmodern'));

new SimpleBar(document.getElementById('avangard'));

new SimpleBar(document.getElementById('future'));