(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('select').material_select();
    $(".index-card").hover(function(){
    	// $(this).removeClass("white").addClass("light-green accent-1");
        var itemId = $(this).attr("id");
        $("#" + itemId.replace("div","img")).attr("src","source/"+itemId.substr(itemId.length-1,1)+"_2.png");
    },function () {
    	// $(this).removeClass("light-green accent-1").addClass("white");
        var itemId = $(this).attr("id");
        $("#" + itemId.replace("div","img")).attr("src","source/"+itemId.substr(itemId.length-1,1)+"_1.png");
    });
    $(".cv-btn").click(function(){
    		window.location="../submit.html";
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space