var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  
   name:String,
   email_id:{type:String,unique:true},
   recommendations:[{type:mongoose.Schema.Types.ObjectId,
                     ref:"Videos"
                  }]
    
});

module.exports = mongoose.model("User",userSchema);