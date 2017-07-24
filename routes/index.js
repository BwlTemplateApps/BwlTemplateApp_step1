var express = require('express');
var router = express.Router();


/* ----------------------------------
   showing some info during routing
   ---------------------------------- */
var loginfo = function (req, res, next) {
  var method = req.method;
  console.log('INFO('+method+') ------------------------------');
  console.log('INFO('+method+') host: '+req.hostname+' url: '+req.originalUrl+' base-url: '+req.baseUrl);
  console.log('INFO('+method+') params: '+JSON.stringify(req.params)); // parameters from route such as /test/<id>
  console.log('INFO('+method+') query: '+JSON.stringify(req.query)); // string parameters such as ?id=123
  console.log('INFO('+method+') body: '+JSON.stringify(req.body)); // post arguments
  next();
}
router.use(loginfo);

/* ==================================
   Pages
   ================================== */
router.get('/', function(req, res, next) {
	res.redirect('/welcome');
});

router.get('/welcome', function(req, res, next) {
	res.send('Hello');
});

module.exports = router;
