let express = require("express");
let app = express();
let dropbox = require("dropbox").Dropbox;
let dbx = new Dropbox({clientId: "i2ucyknubgl3g21"});

app.use(express.static("public"));

module.exports = app;
