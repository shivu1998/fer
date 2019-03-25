(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();

const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
var User=require("../models/user");
var Video=require("../models/videos");
var api_key="AIzaSyCVHp-sceFLnk_-XuuvEhZX9VytMb2blVc"
var {google}=require("googleapis");
var service=google.youtube('v3');
router.use(bodyParser.urlencoded({extended:true}));
var d;
// Middleware
router.use(bodyParser.json());

// var group =require("../models/group");
// var NodeGeocoder = require('node-geocoder');
// var nodemailer = require("nodemailer");
// var multer = require('multer');

router.post("/login",function(req,res)
{
    //res.send(req.body);
    var data={"name":req.body.name,"email_id":req.body.email_id};
    User.find({email_id:req.body.emai_id},function(err,user)
    {
        if(err)
        {
          return  res.redirect("/");
        }
        else
        {
            
        if(!user)
        {
            User.create(data,function(err,user)
                {
                    if(err)
                    {
                        console.log(err);
                        return res.redirect("/");
                        
                    }else
                    {
                       
                    
            var spawn=require("child_process").spawn;
             var process = spawn('C:\\Users\\shivu\\Downloads\\python notes\\python.exe',["./routes/videos.py"]);
             //var decoder=new StringDecoder('utf8');
             process.stdout.on('data',function(data)
             {
                
                  d=JSON.parse(data.toString("utf8"));
                 
                 // console.log(typeof(d));
                    res.render("dashboard.ejs",{name:req.body.name,videos:d});
           
                 
             });
            
                       
                    }
                    
        
                });
            
        }else
        {      
             var spawn=require("child_process").spawn;
             var process = spawn('C:\\Users\\shivu\\Downloads\\python notes\\python.exe',["./routes/videos.py"]);
             //var decoder=new StringDecoder('utf8');
             process.stdout.on('data',function(data,next)
             {
                 
                  d=JSON.parse(data.toString("utf8"));
                 
                 // console.log(typeof(d));
                    res.render("dashboard.ejs",{name:req.body.name,videos:d});
           
             });
             
             
            
        }
        }
        
    });
    
});

router.get("/watch/:vid",(req,res)=>
{
    var spawn=require("child_process").spawn;
    var process = spawn('C:\\Users\\shivu\\Downloads\\python notes\\python.exe',["./routes/detectfaces.py"]);
    res.render("watch.ejs",{vid:req.params.vid});
    
    
});

router.get("/capture",(req,res)=>
{
             var spawn=require("child_process").spawn;
             var process = spawn('C:\\Users\\shivu\\Downloads\\python notes\\python.exe',["./routes/detectfaces.py"]);
             //var decoder=new StringDecoder('utf8');
            //  process.stdout.on('data',function(data,next)
            //  {
                 
            //       d=JSON.parse(data.toString("utf8"));
                 
            //      // console.log(typeof(d));
            //         res.render("dashboard.ejs",{name:req.body.name,videos:d});
           
            //  });
    
});


module.exports = router;