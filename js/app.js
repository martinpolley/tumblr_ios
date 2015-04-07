$(document).ready(function() {
  
  var win_height = $(window).innerHeight();
  /*alert(win_height + "\n" + $(window).height());*/
  var button_move = win_height/2 + 120;
  
  set_icon_left();
  
  $(window).resize(function() {
    set_icon_left();
    win_height = $(window).height();
    button_move = win_height/2 + 120;
  });
  
  $('input[value=new]').on("click", function(e){
    e.preventDefault();
    var dur_in = 500;
    var tens = 300;
    var frict = 25;
    /*var trans_y = "-600px";*/
    var trans_y = -button_move;
    $('.overlay').velocity("fadeIn", { duration: 50, delay: 150 });
    /* Blur animate is a bit clunky on mobile :( */
    /*$('#content').velocity( { blur: 3 }, { duration: 200 } );*/
    $('.nevermind').velocity("slideDown", { duration: 200, delay: 300});
    $('a#b1').velocity( { translateY: trans_y }, { duration: dur_in, delay: 150, easing: [ tens, frict ] });
    $('a#b2').velocity( { translateY: trans_y }, { duration: dur_in, delay: 0, easing: [ tens, frict ] });
    $('a#b3').velocity( { translateY: trans_y }, { duration: dur_in, delay: 200, easing: [ tens, frict ] });
    $('a#b4').velocity( { translateY: trans_y }, { duration: dur_in, delay: 350, easing: [ tens, frict ] });
    $('a#b5').velocity( { translateY: trans_y }, { duration: dur_in, delay: 250, easing: [ tens, frict ] });
    $('a#b6').velocity( { translateY: trans_y }, { duration: dur_in, delay: 300, easing: [ tens, frict ] });
    
  });

  $('.page-wrap, .overlay, .nevermind').on("click", function(){
    var dur_out = 500;
    var trans_y = "-1600px";
    $('a#b1').velocity( { translateY: trans_y }, { duration: dur_out });
    $('a#b2').velocity( { translateY: trans_y }, { duration: dur_out, delay: 100});
    $('a#b3').velocity( { translateY: trans_y }, { duration: dur_out, delay: 0});
    $('a#b4').velocity( { translateY: trans_y }, { duration: dur_out, delay: 150});
    $('a#b5').velocity( { translateY: trans_y }, { duration: dur_out, delay: 250});
    $('a#b6').velocity( { translateY: trans_y }, { duration: dur_out, delay: 150});
    $(".overlay").velocity("fadeOut", { duration: 150, delay: 500 });
    /*$('#content').velocity( { blur: 0 }, { duration: 150, delay: 500 } );*/
    $('.nevermind').velocity("slideUp", { duration: 150, delay: 50 });
    $('a#b1').velocity( { translateY: "100px" }, { duration: 0 });
    $('a#b2').velocity( { translateY: "100px" }, { duration: 0 });
    $('a#b3').velocity( { translateY: "100px" }, { duration: 0 });
    $('a#b4').velocity( { translateY: "100px" }, { duration: 0 });
    $('a#b5').velocity( { translateY: "100px" }, { duration: 0 });
    $('a#b6').velocity( { translateY: "100px" }, { duration: 0 });
  });
});

function set_icon_left() {
  var half_win_width = ($(window).width()/2);
  /* Initially, width is reported as zero, so using a hard-coded value to make it work :-/ */
  /*var half_icons_width = ($('#icon_container').width()/2);*/
  var half_icons_width = 119;
  var icons_left = (half_win_width - half_icons_width);
  /*alert("half_win_width = " + half_win_width + "\n" + "half_icons_width = " + half_icons_width + "\n"  + "icons_left = " + icons_left);*/
  $('#icon_container').css("left", icons_left);

}