var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var ratio = 1;
var objects = [];

function drawBase(imgSrc, callback) {
  var img = new Image();
    img.onload = function() {

      canvas.height = img.naturalHeight / img.naturalWidth * canvas.getBoundingClientRect().width;
      canvas.width =  canvas.getBoundingClientRect().width;
      ratio = canvas.width / img.naturalWidth;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      callback();
    };
    img.src = imgSrc;
}
drawBase('img/map-heden.jpg', function(){draw('img/gebied-1.png', 717, 710)})

// knop klikken dan roept hij dropbase aan

function draw(imgSrc, imgX, imgY) {
  var img = new Image();
    img.onload = function() {
      var width = img.naturalWidth * ratio;
      var height = img.naturalHeight * ratio;
      imgX = imgX * ratio;
      imgY = imgY * ratio;
      ctx.drawImage(img, imgX, imgY, width, height);
      var object = {
        x : imgX,
        y : imgY,
        x2 : imgX + width,
        y2 : imgY + height,
        description : "Lorem ipsum"
      }
      objects.push(object);
    };
    img.src = imgSrc;
}

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