$(document).ready(function() {
  $('.hidden').fadeIn(1600).removeClass('hidden');
  $('#epithets').typeIt({
    strings: ["front end developer.", "UI/UX desiger.", "dog lover.", "front end developer." ],
     speed: 80,
     breakLines: false,
     autoStart: false
   });

  $(document).ready(function () {
    var images = ["assets/bench3.jpg", "assets/brainchem.jpg", "http://image.vsco.co/1/5684a5c9f275b12998763/59a237115e52c72711bb95d3/1600x1121/vsco59a23714a38fc.jpg", "http://image.vsco.co/1/5684a5c9f275b12998763/58de4c8d85f97369093c1fd7/1600x1062/vsco_033117.jpg", "http://image.vsco.co/1/5684a5c9f275b12998763/5880e1a16b3e5d756603ff54/1600x1063/vsco_011917.jpg", "assets/space.jpg"]
    var imageHead = document.getElementById("image-head");
    var i=0;
    setInterval(function() {
      imageHead.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.5)), url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
    }, 5000);
  });

});
