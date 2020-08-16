var express = require('express')
var router = express.Router()

router.get("/", function(req, res){
  res.sendFile('index.html', { root: "views" });
});

router.get("/profile", function(req, res) {
  res.sendFile("profile.html", { root: "views" });
});

module.exports = router