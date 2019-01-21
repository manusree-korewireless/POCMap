var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/map', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var a = Math.floor(Date.now() / 1000);
  var loc = { "iMEI": "000013612345678",
    "location": 
        [{
            "lat": 10.011818 + 1000000/a,
            "lon": 76.366180 + 1000000/a 
        }]
      }
  res.send(loc);
});
module.exports = router;
