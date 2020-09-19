$(function () {
  $('#logo ').mouseover(function () {
    $("#logo").css("transform", "rotate(18000deg)");
  })

})


var colors = ["#FFD700", "#0099cc", "#c0c0c0", "#587b2e", "#990000", "#1C8200", "#987baa", "#981890", "#AA8971", "#1987FC", "#99081E"];
$(function () {


  setInterval(function () {

    var bodybgarrayno = Math.floor(Math.random() * colors.length);
    var selectedcolor = colors[bodybgarrayno];
    $("#logo").css("border", "8px solid" + selectedcolor);
  }, 2000);

})
$(function () {
  $("figure").click(function () {

    $("figure").css("transform", "rotate(3600deg)");
  })
})