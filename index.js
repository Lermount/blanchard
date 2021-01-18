//swiper
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 50,
    height: 100,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },


});

//scroll
new SimpleBar(document.getElementById('realizm'));

new SimpleBar(document.getElementById('impresion'));

new SimpleBar(document.getElementById('postmodern'));

new SimpleBar(document.getElementById('avangard'));

new SimpleBar(document.getElementById('future'));

//burger open
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    })
})
//burger close
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#closer').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    })
})

//input-adaptive open
function viewSearch(){
    document.getElementById("search").style.display = "flex";
    if(screen.width <= 768){
        document.getElementById("logo").style.display = "none";
        document.getElementById("burger").style.display = "none"
    }
    
    if(screen.width == 320){
        document.getElementById("search-btn").style.display = "none";
    }else{
        document.getElementById("logo").style.marginRight = "138px";
    };
    

  };
//input adaptive close
  function closeSearch(){
    document.getElementById("search").style.display = "none";
    if(screen.width <= 768){
        document.getElementById("logo").style.display = "block";
        document.getElementById("logo").style.margin = "0 auto"
        document.getElementById("burger").style.display = "block"
    }
    
    if(screen.width >= 768){
        document.getElementById("logo").style.margin = "0 auto";
    }else{
        document.getElementById("search-btn").style.display = "block";
    };

  };


