(function($){
  $(function(){
    $('.button-collapse').sideNav();
  }); // end of document ready
})(jQuery); // end of jQuery name space

// //svg animation
// $(document).ready(function() {
//   var tmax_tl = new TimelineMax({
//       delay: 2,
//       repeat: 0,
//       repeatDelay: 2
//     }),

//     svg_shapes = $('#logo'),
//     stagger_val = 0.00125,
//     duration = 1.5,

//     stagger_opts_from = {
//       css: {
//         opacity: 0,
//         transform: 'translate(0px, 50px) rotate(0deg) scale(1)',
//         transformOrigin: 'center center'
//       },
//       ease: Elastic.easeInOut
//     },

//     stagger_opts_to = {
//       css: {
//         opacity: 1,
//         transform: 'translate(0px) rotate(0deg) scale(1.2)'
//       },
//       ease: Elastic.easeInOut
//     };

//   tmax_tl.staggerFromTo(
//     svg_shapes,
//     duration,
//     stagger_opts_from,
//     stagger_opts_to,
//     stagger_val,
//     0
//   );
// });

//On clicking the mooments button on projects page, change to moments tab
$(".moments-btn").click(function() {
    $('ul.tabs').tabs('select_tab', 'moments');
});

//On clicking the work button on projects page, change to work tab
$(".work-btn").click(function() {
    $('ul.tabs').tabs('select_tab', 'work');
});

//carousel width
$('.carousel.carousel-slider').carousel({full_width: true});

//carousel next slide
var nextslide = function(){
    $('.carousel').carousel('next');
}

//smooth-scrolling
$("#work-link").click(function() {
  $('html, body').animate({
      scrollTop: $("#scroll-to-work").offset().top
  }, 800);
});

var figure = $(".video").hover( hoverVideo, hideVideo );
function hoverVideo(e) {  
    $(this).get(0).play(); 
}

function hideVideo(e) {
    $(this).get(0).pause(); 
}


//show password field
var showpsswrd = function() {
  $(".psswrd").show();
  // window.location.href="#psswrd-scroll";
};

// validate password
var validatepsswrd = function(event) {

  if (event.keyCode == 13) {

    event.preventDefault();

    var type = $(event.currentTarget).data("type");

    if (type == "bundles") {
      var input = $("#password");
    } else if (type == "promotions") {
      var input = $("#password-promo");
    } else if (type == "pangea") {
      var input = $("#password-pangea");
    }

    var txt = input.val();
    var project = input.data("project");

    if(txt == "access2017") {
      input.addClass("valid");
      window.open(project, '_blank');
      
      $(".psswrd").hide();
      $(".access-link").hide();

      input.removeClass("invalid");
    
    } else if(!(txt == "access2017") && event.keyCode == 13) {
      
      $(".access-link").show();
      input.addClass("invalid");

      $("input[type=password] + label.active").css("color", "#f44336 !important");

    }
  }
};
