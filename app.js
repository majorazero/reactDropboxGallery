let express = require("express");
let app = express();

require('isomorphic-fetch');
let dropbox = require("dropbox").Dropbox;
let dbx = new dropbox({accessToken: "4DOPxV7FGysAAAAAAAAMp_xQ3qo3vmNYzHJzRAuRnCmQPWmANT9-H2oOkgr_PJkX"});
global.btoa = require("btoa");

app.get("https://content.dropboxapi.com/1/thumbnails/auto/dude1.png?size=s&access_token=4DOPxV7FGysAAAAAAAAMp_xQ3qo3vmNYzHJzRAuRnCmQPWmANT9-H2oOkgr_PJkX",function(req,res){
  console.log(res);
});

fetch("https://content.dropboxapi.com/1/thumbnails/auto/dude1.png?size=s&access_token=4DOPxV7FGysAAAAAAAAMp_xQ3qo3vmNYzHJzRAuRnCmQPWmANT9-H2oOkgr_PJkX",function(req,res){
  console.log(res);
});
//app.use(express.static("public"));

// dbx.filesListFolder({path:""})
//   .then(function(response){
//     console.log(response.entries);
//   })
//   .catch(function(error){
//     console.log(error);
//   });
// dbx.filesGetThumbnail({path:"/dude1.png"})
//   .then(function(res){
//     console.log(res);
//     var img = atob(res.fileBinary);
//   })
//   .catch(function(error){
//     console.log(error);
//   });



module.exports = app;
