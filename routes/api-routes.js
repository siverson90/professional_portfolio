var express = require("express");

module.exports = function(app) {

  // landing page
  app.get("/", function(req,res){

    res.render("home");
  });

  app.get("/api/resume", function(req, res){
    
    var filePath = "/Resume_Josh_Siverson.pdf";
    var fileName = "Resume_Josh_Siverson.pdf"
    console.log("resume route");

    res.download(__dirname + filePath, function(err){
      if (err) throw err;
      else {
        console.log("no error");
      }
    });

    });
};