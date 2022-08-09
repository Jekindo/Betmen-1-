$(function(){
    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 2,
        dots: false,
        prevArrow: false,
        nextArrow: '<svg class="slick-right" width="31" height="22" viewBox="0 0 54 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M52.7678 20.7678C53.7441 19.7915 53.7441 18.2085 52.7678 17.2322L36.8579 1.32233C35.8816 0.34602 34.2986 0.34602 33.3223 1.32233C32.346 2.29864 32.346 3.88155 33.3223 4.85786L47.4645 19L33.3223 33.1421C32.346 34.1184 32.346 35.7014 33.3223 36.6777C34.2986 37.654 35.8816 37.654 36.8579 36.6777L52.7678 20.7678ZM0 21.5L51 21.5V16.5L0 16.5L0 21.5Z" fill="black"/></svg>',
        slidesToScroll: 2
      });
});