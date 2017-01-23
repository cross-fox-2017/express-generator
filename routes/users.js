var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // if(req.query && req.query.inputtt){
    var kata = req.query.inputtt.toLowerCase()
    res.render('form', {title:"judul",apa:"kata apa",answer:kata});
  // }
});

module.exports = router;
