let express = require("express");
let app = express();

require('isomorphic-fetch');
let dropbox = require("dropbox").Dropbox;
let dbx = new dropbox({accessToken: "4DOPxV7FGysAAAAAAAAMp_xQ3qo3vmNYzHJzRAuRnCmQPWmANT9-H2oOkgr_PJkX"});
global.atob = require("atob");

app.use(express.static("public"));

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

app.get("/",function(req,response){
  //res.send("Hello World");
  //res.send(img);
  dbx.filesGetThumbnail({path:"/dude1.png"})
    .then(function(res){
      var img = document.createElement("img");
      img.src = "data:image/jpeg;base64" + atob(res.fileBinary);
      document.body.appendChild(img);
      //response.send(atob(res.fileBinary));
    })
    .catch(function(error){
      console.log(error);
    });
});

module.exports = app;
