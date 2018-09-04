$(document).ready(function() {
  $('.hidden').fadeIn(1600).removeClass('hidden');
  $('#epithets').typeIt({
    strings: ['design technology intern at Amazon.        ',
    'front end engineer.          ', 'UI/UX designer.          ', 'dog enthusiast.          ',
     'design technologist intern at Amazon.'],
     speed: 90,
     lifeLike: true,
     breakLines: false,
     autoStart: false,
     nextStringDelay: [2000]
   });

  $(document).ready(function () {
    var images = ["assets/bench3.jpg", "assets/brainchem.jpg", "http://image.vsco.co/1/5684a5c9f275b12998763/59a237115e52c72711bb95d3/1600x1121/vsco59a23714a38fc.jpg", "http://image.vsco.co/1/5684a5c9f275b12998763/58de4c8d85f97369093c1fd7/1600x1062/vsco_033117.jpg", "http://image.vsco.co/1/5684a5c9f275b12998763/5880e1a16b3e5d756603ff54/1600x1063/vsco_011917.jpg", "assets/space.jpg"]
    var imageHead = document.getElementById("image-head");
    var i=0;
    // setInterval(function() {
    //   imageHead.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.5)), url(" + images[i] + ")";
    //   i = i + 1;
    //   if (i == images.length) {
    //     i =  0;
    //   }
    // }, 5000);
  });

});

// selecting work sections

let sections = ['work', 'projects', 'fun']
let work_info = [
  {
  'title': 'Amazon',
  'role': 'Design technology intern at Amazon',
  'date': 'summer 2018',
  'img': './assets/amazon-logo.svg',
  'href': 'amazon.html'
  },
  {
    'title': 'StartupTree',
    'role': 'Front end engineer and UI/UX designer',
    'date': 'summer 2017',
    'img': './assets/map-header.jpg',
    'href': 'startuptree.html'
  },
  {
    'title':'Dyson Media Innovation Group: Minors Tool',
    'role': 'Front end engineer and UI/UX designer',
    'date': 'Fall 2016 - present',
    'img': './assets/dmig3.jpg',
    'href': 'dmig.html'
  },
  {
    'title':'Dyson Media Innovation Group: Events Tool',
    'role': 'Front end engineer and UI/UX designer',
    'date': 'Fall 2017',
    'img': './assets/eventlogo.svg',
    'href': 'dmig-event.html'
  },
]

let projects_info = [
  {
    'title': 'Music Machine',
    'role': 'Rapid prototyping development',
    'date': 'Spring 2018',
    'img': './assets/musicPoster.jpg',
    'href': 'music.html'
  },
  {
    'title': 'Smoke',
    'role':'Processing development',
    'date': 'Spring 2017',
    'img': './assets/smoke.png',
    'href': 'sm.html'
  },
  {
    'title': 'Flourish',
    'role': 'UX Research and Design',
    'date': 'Spring 2017',
    'img': './assets/FlourishLogo.svg',
    'href': 'flourish.html'
  }
]

let fun_info = [
  {
    'title': 'Graphic Design',
    'role': 'AP Studio Art',
    'date': '2013-2015',
    'img': './assets/brainchem.jpg',
    'href': 'gallery.html'
  },
  {
    'title': 'Photography',
    'role': 'A few photos',
    'date': '2013 - Present',
    'img': './assets/lake.jpg',
    'href': 'photos.html'
  },
  {'title': 'Laser printing',
    'role': 'Various laser engraving projects',
    'date': 'Spring 2018',
    'img':'./assets/laser1.jpg',
    'href': 'laser.html'
  }
]

function drawPanels(section){
  let i=0;
  section.forEach(function(d) {
    document.getElementById('title'+i).innerText = d.title
    document.getElementById('role'+i).innerText = d.role
    document.getElementById('date'+i).innerText = d.date
    document.getElementById('img_'+i).style.backgroundImage = 'url('+d.img+')'
    console.log(d.href)
    document.getElementById('href'+i).href = d.href

    i++;
  })

  if(section.length < 4){
    document.getElementById('panel5').style.opacity = 0;
    document.getElementById('panel5').style.visibility = 'hidden';
  }
  else {
    document.getElementById('panel5').style.opacity = 1;
    document.getElementById('panel5').style.visibility = 'visible';
  }
}

function chooseSection(btnVal){
  sections.forEach(function(element) {
      if(element != btnVal){
        document.getElementById(element).className = ""
      }
  });

  var current = document.getElementById(btnVal)
  current.className += "btnActive"

  if(btnVal === 'projects'){
    drawPanels(projects_info)
  }
  else if (btnVal === 'work') {
    drawPanels(work_info)
  }
  else if (btnVal === 'fun') {
    drawPanels(fun_info)
  }
}
