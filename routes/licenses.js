var express = require('express');
var router = express.Router();
const fs = require('fs');
/* GET home page. */
router.get('/:id', function(req, res, next) {
  console.log("req.params", req.params.id);
  const JSONfile = __dirname + "/licenses.json";
  const obj = JSON.parse(fs.readFileSync(JSONfile, 'utf8'));
  res.json(obj[req.params.id]);
});



module.exports = router;
