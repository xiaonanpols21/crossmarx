var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var ratio = 1;
var objects = [];

var btn21 = document.querySelector("#btn-21");
var btn22 = document.querySelector("#btn-22");
var btn24 = document.querySelector("#btn-24");

var elements = document.getElementsByClassName("go_strand-btn");

var year = 2021;

canvas.addEventListener("click", function(event){
  var x = event.offsetX;
  var y = event.offsetY;

  objects.forEach(function(object) {
    if (x > object.x && y > object.y && x < object.x2 && y < object.y2) {
        console.log(object.description);
        ctx.font = "30px Arial";
        ctx.fillStyle = 'white';
        ctx.fillRect(object.x - 15, object.y - 30, 200, 50);
        ctx.fillStyle = 'black';
        ctx.fillText(object.description, object.x, object.y);
    }
  });	
})

var projects = 
`[
  {
      "url": "img/gebied-1.png",
      "originalX": 717,
      "originalY": 710,
      "description": "Tijdelijk strand, met een bioscoopterp, sportveldjes, horeca, reddingsbrigade, watersportcluster" ,
      "year": 2022
  },

  {
       "url": "img/gebied-2.png",
       "originalX": 1714,
       "originalY": 168
       ,
       "description": "Onderstation van Liander is in aanbouw. Het onderstation is nodig om te kunnen v0orzien in groeiende elektriciteitsbehoefte in de stad en vervult straks deze functie voor een groot deel van Oost, waardoor het huidige onderstation op de Kadijken in het centrum van de stad wordt ontlast" ,
       "year": 2022
   },

  {
       "url": "img/gebied-3.png",
       "originalX": 1254,
       "originalY": 909,
       "description": "In deze woningen zullen natuurlijk ook kinderen wonen, dus in 2024 wordt ook gestart met de bouw van de eerste basisschool, die in het park Muidenbuurt komt te staan." ,
       "year": 2024
   },

  {
       "url": "img/gebied-4.png",
       "originalX": 965,
       "originalY": 1044,
       "description": "Aan zuidkant van de Muidenbuurt wordt de waterkering aangelegd. Het eerste deel van de zuidelijke natuurbaai wordt gerealiseerd. Uitleggen wat we gaan maken en waarom." ,
       "year": 2024
   },

  {
       "url": "img/gebied-5.png",
       "originalX": 1506,
       "originalY": 954,
       "description": "Met de komst van de eerste bewoners is ook ruimte om te sporten nodig. In 2024 wordt daarom ook begonnen met het realiseren van het eerste deel van het tijdelijk sportpark Muidenbuurt met waarschijnlijk een gebouwde voorziening, urban sports en een omniveld. Mogelijk ook schooltuinen en een combinatie met cultuur." ,
       "year": 2024
   },

  {
       "url": "img/gebied-6.png",
       "originalX": 1099,
       "originalY": 1005,
       "description": "Met de komst van de eerste bewoners is ook ruimte om te sporten nodig. In 2024 wordt daarom ook begonnen met het realiseren van het eerste deel van het tijdelijk sportpark Muidenbuurt met waarschijnlijk een gebouwde voorziening, urban sports en een omniveld. Mogelijk ook schooltuinen en een combinatie met cultuur." ,
       "year": 2024
   },

  {
       "url": "img/gebied-7.png",
       "originalX": 888,
       "originalY": 923,
       "description": "Aan de Makerskade is gestart met de bouw van het Energiegebouw, dat nodig is om de WKO te laten functioneren." ,
       "year": 2024
   },

  {
       "url": "img/gebied-8.png",
       "originalX": 1825,
       "originalY": 495,
       "description": "Aan de andere zijde van de Muidenbuurt is gestart met de bouw van de bruggen 2060 en 2080 en de toegangswegen die daarop gaan aansluiten: de Pampuslaan en de Oeverparklaan. Hierover zal straks grotendeels het bewonersverkeer gaan. Ook het Openbaar vervoer gaat over deze bruggen" ,
       "year": 2024
   },

  {
       "url": "img/gebied-9.png",
       "originalX": 960,
       "originalY": 614,
       "description": "Aan de andere zijde van de Muidenbuurt is gestart met de bouw van de bruggen 2060 en 2080 en de toegangswegen die daarop gaan aansluiten: de Pampuslaan en de Oeverparklaan. Hierover zal straks grotendeels het bewonersverkeer gaan. Ook het Openbaar vervoer gaat over deze bruggen" ,
       "year": 2024
   }

   
]
`

// Json file comments
/* 
Line: 24: Gebied 2 en 3 horen bij elkaar. Nu zijn ze losse gebiede. Of kan 1 groot gebied ook?
Line: 35 t/m 49 zijn 2 gebieden die bij elkaar horen.
Line: 60 t/m 73 zijn 2 gebieden die bij elkaar horen.
*/

var projectsArray = JSON.parse(projects);

console.log(projectsArray[0]);

function init(imgSrc) {
  var img = new Image();
    img.onload = function() {console.log(img)
      canvas.width =  canvas.getBoundingClientRect().width;
      canvas.height = this.naturalHeight / this.naturalWidth * canvas.getBoundingClientRect().width;
      
      ratio = canvas.width / this.naturalWidth;
      ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
      
      for (var i = 0; i < projectsArray.length; i++) {
        // console.log(projectsArray[i]);


        var img = new Image();
        img.project = projectsArray[i];
          img.onload = function() {
            var width = this.naturalWidth * ratio;
            var height = this.naturalHeight * ratio;
            var x = this.project.originalX * ratio;
            var y = this.project.originalY * ratio;
      
            this.project.x = x;
            this.project.y = y;
            this.project.x2 = x + width;
            this.project.y2 = y + height;
            this.project.width = width;
            this.project.height = height;
          };
          img.src = projectsArray[i].url;
      }
      
    };
    img.src = imgSrc;
}
init('img/map-heden.jpg');

// welke bg, welk jaar

// json init en draw

function draw(backgroundUrl, year) {
  var filteredJson = projectsArray.filter(function(item) {
    return item.year == year;
  });

  var img = new Image();
  img.onload = function() {console.log(img)

   ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
    
    for (var i = 0; i < filteredJson.length; i++) {
      // console.log(projectsArray[i]);

      var img = new Image();
      img.project = filteredJson[i];
        img.onload = function() {
          ctx.drawImage(this, this.project.x, this.project.y, this.project.width, this.project.height);
          console.log(this.project);
         
        };
        img.src = filteredJson[i].url;
    }
    
  };
  img.src = backgroundUrl;

  console.log(filteredJson);
}


for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function(){
     year = this.getAttribute("data-year");
    var background = 'img/map-heden.jpg';
    if (document.querySelector('#go_plattegrond-verleden').checked) {
      background = 'img/map-verleden.jpg';
    }
    draw(background, year)
   
  })
}

document.querySelector('#go_plattegrond-verleden').addEventListener('change', function(e) {
  var background = 'img/map-heden.jpg';
  if (e.currentTarget.checked) {
    background = 'img/map-verleden.jpg';
  }
  draw(background, year);
})

canvas.addEventListener("click", function(event){
  var x = event.offsetX;
  var y = event.offsetY;

  var filteredJson = projectsArray.filter(function(item) {
    return item.year == year;
  });

  filteredJson.every(function(object) {
    if (x > object.x && y > object.y && x < object.x2 && y < object.y2) {
        alert(object.description);
        return false;
    }
  });	
  console.log(event, filteredJson)
})