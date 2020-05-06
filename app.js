//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const pack =require("./azkarM.js");
const packs =require("./azkarN.js");
var favicon = require('serve-favicon');








const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(favicon(__dirname + '/public/favicon.ico'));





app.get("/", function(req, res){
  res.render("home");
});



app.get("/morning/:pid", function(req, res){
  const reqId= (req.params.pid);

const prevs=reqId -1;
if(reqId>-1 && reqId<20)
{  res.render("morning",{
    prev:prevs,
    pgNo:pack[reqId].roll,
     num:pack[reqId].recitationNo,
    azkar:pack[reqId].zikr,
    trans:pack[reqId].translation,
    ref:pack[reqId].resource

  });}
  else{
    res.redirect("/");
  }
});


app.get("/night/:pid", function(req, res){
  const reqId= (req.params.pid);
  const prevs=reqId -1;
  if(reqId>-1 && reqId<18)
  {  res.render("night",{
      prev:prevs,
      pgNo:packs[reqId].roll,
       num:packs[reqId].recitationNo,
      azkar:packs[reqId].zikr,
      trans:packs[reqId].translation,
      ref:packs[reqId].resource

    });}
    else{
      res.redirect("/");
    }
  });






let port= process.env.PORT;
if(port == null || port == ""){
  port=3000;

}


app.listen(port, function() {
  console.log("Server started on port 3000");
});
