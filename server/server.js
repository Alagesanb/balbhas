var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongo = require("mongoose");  
var AccountModel = require('../server/models/account.model');   
var userModel  =  require('../server/models/user.model');
var db = mongo.connect("mongodb://localhost:27017/balbhasdb", function(err, response){  
  if(err){ console.log( err); }  
  else{ console.log('Connected to ' + db, ' + ', response); }  
});  
  
   
var app = express()  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true}));  
   
  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  
  
 
   
  //Account Route
app.post("/api/addAccount",function(req,res){   
 var mod = new AccountModel(req.body);  
 if(req.body.mode =="Save")  
 { 
    mod.save(function(err,data){  
      if(err){  
         res.send(err);                
      }  
      else{        
          res.send({data:"Record has been Inserted..!!"});  
      }  
 });  
}  
else   
{  
  mod.findByIdAndUpdate(req.body.id, { account_holder: req.body.account_holder, accounttype: req.body.accounttype,fathers_name: req.body.fathers_name},  
   function(err,data) {  
   if (err) {  
   res.send(err);         
   }  
   else{        
          res.send({data:"Record has been Updated..!!"});  
     }  
 });  
  
  
}  
 })  

 //User Route

 app.post("/api/SaveUser",function(req,res){   
  var mod = new userModel(req.body);  
  if(req.body.mode =="Save")  
  {  
     mod.save(function(err,data){  
       if(err){  
          res.send(err);                
       }  
       else{        
           res.send({data:"Record has been Inserted..!!"});  
       }  
  });  
 }  
 else   
 {  
  userModel.findByIdAndUpdate(req.body.id, { name: req.body.name, email: req.body.email,password: req.body.password},  
    function(err,data) {  
    if (err) {  
    res.send(err);         
    }  
    else{        
           res.send({data:"Record has been Updated..!!"});  
      }  
  });  
   
   
 }  
  })  
   
  
 app.post("/api/deleteUser",function(req,res){      
  userModel.remove({ _id: req.body.id }, function(err) {    
     if(err){    
         res.send(err);    
     }    
     else{      
            res.send({data:"Record has been Deleted..!!"});               
        }    
 });    
   })  
  
  
  
 app.get("/api/getUser",function(req,res){  
  userModel.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          });  
  })  
  
 
  
  

app.listen(8080, function () {  
    
 console.log('Example app listening on port 8080!')  
})  