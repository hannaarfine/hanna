$(document).ready(function() {
  $('.hidden').fadeIn(1600).removeClass('hidden');
  $('#epithets').typeIt({
    strings: ["front end engineer.", "UI/UX desiger.", "dog lover.", "front end engineer." ],
     speed: 80,
     breakLines: false,
     autoStart: false
   });
  // $(document).ready(function () {
  //
  //
  //   $("#design, #dog, #coffee, #photo").hide();
  // var mentCounter = 0;
  // window.setInterval(function(){
  //   if(mentCounter === 0){
  //     $("#front").fadeOut();
  //     setTimeout(function(){
  //       $("#design").fadeIn();
  //     },600);
  //   }
  //   else if(mentCounter == 1){
  //     $("#design").fadeOut();
  //     setTimeout(function(){
  //       $("#dog").fadeIn();
  //     },600);
  //   }
  //   else if(mentCounter == 2){
  //     $("#dog").fadeOut();
  //     setTimeout(function(){
  //       $("#photo").fadeIn();
  //     },600);
  //   }
  //   else if(mentCounter == 3){
  //     $("#photo").fadeOut();
  //     setTimeout(function(){
  //       $("#coffee").fadeIn();
  //     },600);
  //   }
  //   else if(mentCounter == 4){
  //     $("#coffee").fadeOut();
  //     setTimeout(function(){
  //       $("#front").fadeIn();
  //     },600);
  //     mentCounter = -1;
  //   }
  //   mentCounter++;
  // }, 2500);
  // });

  $(document).ready(function () {
    var images = ["assets/space.jpg", "assets/bench3.jpg", "assets/brainchem.jpg"]
    var imageHead = document.getElementById("image-head");
    var i=0;
    setInterval(function() {
      imageHead.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.6)), url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
    }, 5000);
  });

});
