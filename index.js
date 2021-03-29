//swiper-events-mobile
var mSwiper = new Swiper('.events-swiper', {

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

        320: {
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
        1025: {
            spaceBetween: 50,
            slidesPerView: 3,
            slidesPerGroup: 3,
        },

        769: {
            spaceBetween: 50,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        689: {
            spaceBetween: 34,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        350: {
            spaceBetween: 50,
            slidesPerView: 1,
            slidesPerGroup: 1,
        }

    },


});

//progects-swiper

var prSwiper = new Swiper('.progects-swiper', {


    navigation: {
        nextEl: '.progects-swiper-next',
        prevEl: '.progects-swiper-prev',
    },

    breakpoints: {
        1650: {
            spaceBetween: 50,
            slidesPerView: 3,
            slidesPerGroup: 3,
        },

        1024: {
            spaceBetween: 50,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        480: {
            spaceBetween: 34,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        320: {
            spaceBetween: 50,
            slidesPerView: 1,
            slidesPerGroup: 1,
        }



    },


});



//scroll
new SimpleBar(document.getElementById('realizm'), {
    scrollbarMaxSize:28,
});

new SimpleBar(document.getElementById('impresion'),{
    scrollbarMaxSize:28,
});

new SimpleBar(document.getElementById('postmodern'),{
    scrollbarMaxSize:28,
});

new SimpleBar(document.getElementById('avangard'),{
    scrollbarMaxSize:28,
});

new SimpleBar(document.getElementById('future'),{
    scrollbarMaxSize:28,
});

//burger open
function burger() {
    document.getElementById("menu").style.display = "block";
}
//burger close
function closer() {
    document.getElementById("menu").style.display = "none";
}

//gallery-modal

function modalCloser() {
    document.getElementById("modal1").style.display = "none";
    document.getElementById("modal2").style.display = "none";
    document.getElementById("modal3").style.display = "none";
    document.getElementById("modal4").style.display = "none";
    document.getElementById("modal5").style.display = "none";
    document.getElementById("modal6").style.display = "none";
    document.getElementById("modal7").style.display = "none";
    document.getElementById("modal8").style.display = "none";
    document.getElementById("modal9").style.display = "none";
    document.getElementById("modal10").style.display = "none";
    document.getElementById("modal11").style.display = "none";
    document.getElementById("modal12").style.display = "none";
    document.getElementById("modal13").style.display = "none";
    document.getElementById("modal14").style.display = "none";
    document.getElementById("modal15").style.display = "none";
    document.getElementById("modal16").style.display = "none";
    document.getElementById("modal17").style.display = "none";
    document.getElementById("modal18").style.display = "none";
    document.getElementById("overlay").style.display = "none";

};

function slide1() {
    document.getElementById("modal1").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide2() {
    document.getElementById("modal2").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide3() {
    document.getElementById("modal3").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide4() {
    document.getElementById("modal4").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide5() {
    document.getElementById("modal5").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide6() {
    document.getElementById("modal6").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide7() {
    document.getElementById("modal7").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide8() {
    document.getElementById("modal8").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide9() {
    document.getElementById("modal9").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide10() {
    document.getElementById("modal10").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};


function slide11() {
    document.getElementById("modal11").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide12() {
    document.getElementById("modal12").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide13() {
    document.getElementById("modal13").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide14() {
    document.getElementById("modal14").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide15() {
    document.getElementById("modal15").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide16() {
    document.getElementById("modal16").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide17() {
    document.getElementById("modal17").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

function slide18() {
    document.getElementById("modal18").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
};

//language
function french() {
    document.getElementById("catalog-main").style.display = "none";
    document.getElementById("catalog-main2").style.display = "flex";
}

function german() {
    document.getElementById("catalog-main").style.display = "none";
    document.getElementById("catalog-main2").style.display = "flex";
}

function italian() {
    document.getElementById("catalog-main").style.display = "flex";
    document.getElementById("catalog-main2").style.display = "none";
}

function russian() {
    document.getElementById("catalog-main").style.display = "none";
    document.getElementById("catalog-main2").style.display = "flex";
}

function belgian() {
    document.getElementById("catalog-main").style.display = "none";
    document.getElementById("catalog-main2").style.display = "flex";
}

//accordion-items

function accordion() {
    document.getElementById("catalog-main-left").style.display = "none";
    document.getElementById("catalog-main-left2").style.display = "block";
}

function Domenico() {
    document.getElementById("catalog-main-left").style.display = "block";
    document.getElementById("catalog-main-left2").style.display = "none";
}



//input-adaptive open
function viewSearch() {
    document.getElementById("search").style.display = "flex";
    if (screen.width <= 768) {
        document.getElementById("logo").style.display = "none";
        document.getElementById("burger").style.display = "none"
    }

    if (screen.width == 320) {
        document.getElementById("search-btn").style.display = "none";
    } else {
        document.getElementById("logo").style.marginRight = "138px";
    };


};
//input adaptive close
function closeSearch() {
    document.getElementById("search").style.display = "none";
    if (screen.width <= 768) {
        document.getElementById("logo").style.display = "block";
        document.getElementById("logo").style.margin = "0 auto"
        document.getElementById("burger").style.display = "block"
    }

    if (screen.width >= 768) {
        document.getElementById("logo").style.margin = "0 auto";
    } else {
        document.getElementById("search-btn").style.display = "block";
    };

};

//events-btn 

function events() {
    document.getElementById("card4").style.display = "block";
    document.getElementById("card5").style.display = "block";
    document.getElementById("events-btn").style.display = "none";
    if (screen.width <= 935) {
        document.getElementById("card3").style.display = "block";
    }

}

//yandex map


ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: [55.759046, 37.607206],
        zoom: 14.3,

        
    });
   

    
    var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/point.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');

    
}












