$(".mini-photo").hover(
    function(){ $(this).addClass('on-hover') },
    function(){ $(this).removeClass('on-hover') }
);
$(function() {
    var owl = $(".slide-one");
    owl.owlCarousel({
      dots: true,
      items: 1,
      autoplay: true, 
      autoplayTimeout: 5000,
      loop: true,
    });
  });
  $(function() {
    var $menu_popup = $('.menu-popup');
    
    $(".menu-triger, .menu-close").click(function(){
      $menu_popup.slideToggle(300, function(){
        if ($menu_popup.is(':hidden')) {
          $('body').removeClass('body_pointer');
        } else {
          $('body').addClass('body_pointer');
        }					
      });  
      return false;
    });			
    
    $(document).on('click', function(e){
      if (!$(e.target).closest('.menu').length){
        $('body').removeClass('body_pointer');
        $menu_popup.slideUp(300);
      }
    });
  });
  $(window).on('load', function () {
    $('#load').delay(2500).fadeOut('slow');
  });