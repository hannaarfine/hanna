$(document).ready(function() {
  $(document).ready(function () {
    $('.hidden').fadeIn(1600).removeClass('hidden');

    $("#design, #dog").hide();
  var mentCounter = 0;
  window.setInterval(function(){
    if(mentCounter === 0){
      $("#front").fadeOut();
      setTimeout(function(){
        $("#design").fadeIn();
      },600);
    }
    else if(mentCounter == 1){
      $("#design").fadeOut();
      setTimeout(function(){
        $("#dog").fadeIn();
      },600);
    }
    else if(mentCounter == 2){
      $("#dog").fadeOut();
      setTimeout(function(){
        $("#front").fadeIn();
      },600);
      mentCounter = -1;
    }
    mentCounter++;
  }, 3500);
  });
});
