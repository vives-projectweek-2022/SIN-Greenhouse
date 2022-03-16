var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Greenhouse',
    fillingProgressBar: function() { // Dumb function that will fill the progress bar once the button is clicked
      var elem = document.getElementById("progress-bar");
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
        width++;
        elem.style.width = width + '%';
        }
      }
    }
  });
});

module.exports = router;
