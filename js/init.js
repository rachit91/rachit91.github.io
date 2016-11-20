(function($){
  $(function(){

    $('.button-collapse').sideNav();
  }); // end of document ready
})(jQuery); // end of jQuery name space

//svg animation
$(document).ready(function() {
  var tmax_tl = new TimelineMax({
      delay: 1,
      repeat: 0,
      repeatDelay: 2
    }),

    svg_shapes = $('#specs'),
    stagger_val = 0.00125,
    duration = 2.5,

    stagger_opts_from = {
      css: {
        opacity: 0,
        transform: 'translate(0px, -200px) rotate(0deg) scale(1)',
        transformOrigin: 'center center'
      },
      ease: Elastic.easeInOut
    },

    stagger_opts_to = {
      css: {
        opacity: 1,
        transform: 'translate(0px) rotate(0deg) scale(1)'
      },
      ease: Elastic.easeInOut
    };

  tmax_tl.staggerFromTo(
    svg_shapes,
    duration,
    stagger_opts_from,
    stagger_opts_to,
    stagger_val,
    0
  );
});

//On clicking the mooments button on projects page, change to moments tab
$(".moments-btn").click(function() {
    $('ul.tabs').tabs('select_tab', 'moments');
});

//carousel width
$('.carousel.carousel-slider').carousel({full_width: true});

//carousel next slide
var nextslide = function(){
    $('.carousel').carousel('next');
}

