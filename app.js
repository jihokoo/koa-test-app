var koa = require('koa');
var app = koa();

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response

// app.use(function *(){
//   this; // is the Context
//   this.request; // is a koa Request
//   this.response; // is a koa Response
// });

app.use(function *(){
  this.body = 'Hello World';
});

// for custom error handling, even without the code below koa will log
// when it is not possible to respond to the client, koa will pass in the 'ctx' context object
app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});



app.listen(3000);
// syntatic sugar for
// http.createServer(app.callback()).listen(3000);
app.listen(30001);
// can run two servers at once