
var Koa = require('Koa');
var app = new Koa();


app.use(function *(){
  this.body = "Koa says Hi!";
});

app.listen(3000);
console.log("Application started.");

