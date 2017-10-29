(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('select').material_select();
    $(".index-card").hover(function(){
    	$(this).removeClass("white").addClass("orange darken-1");
    },function () {
    	$(this).removeClass("orange darken-1").addClass("white");
    });
    $(".btn").click(function(){
    		window.location="../submit.html";
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space