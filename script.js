
window.onload = function () {
    document.addEventListener('click', documentActions);
    $('.slider-reviews__body').on('init', function(event, slick){
        console.log("initialized")
    });
    $('.slider-reviews__body').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.slider-arrow_prev',
        nextArrow: '.slider-arrow_next',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                autoplay: true,
              }
            }
          ]
      });
}

function documentActions (e) {
    let targetElement = e.target;
    if(targetElement.classList.contains('icon-menu')){
        targetElement.closest('.header__main').classList.toggle('active-menu');
        targetElement.classList.toggle('active');
        document.body.classList.toggle('lock');
    }
}