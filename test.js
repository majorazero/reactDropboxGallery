let request = require("supertest");
let app = require("./app");

//mocha code
describe("Request to root path",function(){
  it("Returns a 200 status code",function(done){
    request(app)
      .get("/")
      .expect(200,done);
  });
});
