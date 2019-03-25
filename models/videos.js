var mongoose = require("mongoose");

var videoSchema = new mongoose.Schema({
   
  videoId:String
  
    
});

module.exports = mongoose.model("Video",videoSchema);