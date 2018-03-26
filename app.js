let express = require("express");
let app = express();

require('isomorphic-fetch');
let dropbox = require("dropbox").Dropbox;
let dbx = new dropbox({accessToken: "4DOPxV7FGysAAAAAAAAMp_xQ3qo3vmNYzHJzRAuRnCmQPWmANT9-H2oOkgr_PJkX"});

app.use(express.static("public"));
console.log(2);
dbx.filesListFolder({path:""})
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log(error);
  });

module.exports = app;
