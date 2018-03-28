let request = require("supertest");
let app = require("./app");
// require('isomorphic-fetch');
// let dropbox = require("dropbox").Dropbox;
// let dbx = new dropbox({accessToken: "4DOPxV7FGysAAAAAAAAMp_xQ3qo3vmNYzHJzRAuRnCmQPWmANT9-H2oOkgr_PJkX"});


//mocha code
describe("Request to root path",function(){
  it("Returns a 200 status code",function(done){
    request(app)
      .get("/")
      .expect(200,done);
  });
  it("Returns a HTML element",function(done){
    request(app)
      .get("/")
      .expect("Content-Type",/html/,done);
  });
});
// describe("Request to Dropbox",function(){
//   it("Requires a token",function(done){
//     request(dbx.filesListFolder({path:""}))
//       .expect(200,done);
//   });
// });
