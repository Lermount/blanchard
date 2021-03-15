//swiper-events-mobile
var mSwiper = new Swiper('.events-swiper',{
    
    spaceBetween: 50,
    pagination: {
        el: '.events-pagination',
      },
  
});

//swiper-hero
var mySwiper = new Swiper('.hero-swiper', {
    loop: true,
    spaceBetween: 50,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },


});


//swiper-gallery
var gallerySwiper = new Swiper('.gallery-swiper', {
    
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
   

    pagination: {
      el: '.swiper-paginationg',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.gallery-swiper-next',
      prevEl: '.gallery-swiper-prev',
    },

    breakpoints: {
       
        1420: {
            spaceBetween: 50,
            slidesPerView: 3,
            slidesPerGroup: 3,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
          
        },

        351: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
        },

        320:{
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerColumn: 1,
        },
        
    },
   
  
});

//books-swiper
var bookSwiper = new Swiper('.books-swiper', {
    
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,
    
    pagination: {
      el: '.swiper-paginationg',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.books-swiper-next',
      prevEl: '.books-swiper-prev',
    },

    breakpoints: {
        1025:{
            spaceBetween: 50,
            slidesPerView: 3,
            slidesPerGroup: 3,
        },

        769:{
            spaceBetween: 50,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        689:{
            spaceBetween: 34,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        350:{
            spaceBetween: 50,
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
        
    },
   
  
});
  

//scroll
new SimpleBar(document.getElementById('realizm'));

new SimpleBar(document.getElementById('impresion'));

new SimpleBar(document.getElementById('postmodern'));

new SimpleBar(document.getElementById('avangard'));

new SimpleBar(document.getElementById('future'));

//burger open
function burger(){
    document.getElementById("menu").style.display = "block";
}
//burger close
function closer(){
    document.getElementById("menu").style.display = "none";
}


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

  //events-btn 

  function events(){
    document.getElementById("card4").style.display = "block";
    document.getElementById("card5").style.display = "block";
    if(screen.width <= 935 ){
        document.getElementById("card3").style.display = "block";
    }    

}

//custom select

  const element = document.querySelector('.categories-select-choice');
    const choices = new Choices(element, {
  } );


 


