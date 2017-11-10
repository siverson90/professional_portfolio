var express = require("express");

module.exports = function(app) {

  // landing page
  app.get("/", function(req,res){

    res.render("home");
  })

  app.get("/portfolio", function(req,res){

    res.render("portfolio");
  })
};