
$(function(){
  // console.log("test");
  $("#current").addClass("current");

  $("#side-nav a").click(function(e) {
    // console.log($(this).html());
    $("#side-nav a").removeClass("active");
    $(this).addClass("active");
  });

  $("#link-header .nav-link").hover(
    function(e) {
      // in
      // console.log("aaa");
      $("#current").removeClass("current");
      $(this).addClass("current");
    },
    function(e) {
      // out
      // console.log("oo");
      $(this).removeClass("current");
      $("#current").addClass("current");
    }
  );

});
