$(document).ready(function(){
  var scrollLink = $('.scroll');

  // Smooth scolling
  scrollLink.click(function(e){
      e.preventDefault();
      $('body, html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000);

      // Active link switching
      $(window).scroll(function(){
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function(){
          var sectionOffset = $(this.hash).offset().top - 20;

            if(sectionOffset <= scrollbarLocation){
              $(this).parent().addClass('active');
              $(this).parent().siblings().removeClass('active');
            }

        })
      })
  });

  var video = document.getElementById('video'); video.addEventListener('click',function(){ video.play(); },false);

  //DROPDOWN MENU
  (function($) { 
    $(function() { 
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });

      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
 
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });

      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); 
  })(jQuery); 

  // header background change
  $(function() {
    $(window).on("scroll", function(e) {
        if($(window).scrollTop() > 50) {
            $("header").css('background', '#151929');
        } else {
            //remove the background property so it comes transparent again (defined in your css)
          $("header").css('background', 'transparent');
        }
    });
  });
});