var $status = $('.quotes_number');
menu = $('.menu');
var $slickElement = $('.center');
var link = document.getElementById("arrow_down"),
    header_subtitle = document.getElementById("header_subtitle"),
    order_box = document.getElementById("order_box");
    itens = [];
link.onclick = function(){
  height = document.getElementById('header_subtitle').clientHeight;
  if((height==93) ||(height==48))
  {
    header_subtitle.classList.add("open");
    link.classList.add("arrow_up");
    $('#order_box').fadeOut('slow', function() {});
  }
  else{
    $('#order_box').fadeIn('slow', function() {});
    header_subtitle.classList.remove("open");
    link.classList.remove("arrow_up");
  }
}

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });


$(document).ready(function() {
  $('.center').slick({
    centerMode: true,
    centerPadding: '350px',
    slidesToShow: 1,
    infinite: true,
    prevArrow: '<img class="a-left control-c prev slick-prev" src="./assets/img/arr_prev.png">',
    nextArrow: '<img class="a-right control-c next slick-next" src="./assets/img/arr_next.png">',
    
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1
      }
    },
       {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
  });
});

$('.js-add-slide').on('click', function() {
  $('.center').slick('slickAdd','<div class="quotes_el"><div class="el_text">'+
                  '<h2>'+
                     'When I was stuck with my essay writing and thought that there is no way out, you guys appeared out of the blue! Your writing team deserves appreciation. I cannot imagine my student life without your competent assistance. Thank you!'+
                  '</h2>'+
              '</div>'+
                '<p class="el_subtext">'+
                  'Andrey L.'+
                '</p>'+
              '</div>');
});

$('#burger').on('click', function() {
   menu.css('display', 'block');
});
$('.cancel').on('click', function() {
   menu.css('display', 'none');
});