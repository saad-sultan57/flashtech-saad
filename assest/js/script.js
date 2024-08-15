$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:5
            },
            1000:{
                items:7
            }
        }
    })
    $('#myVideo').attr('src', $('a.active').attr('href'));
   $(' a').click(function(e){
      e.preventDefault();
      $(' a').removeClass('active');
      $('#myVideo').attr('src', $(this).attr('href'));
      $(this).addClass('active');
   })

});