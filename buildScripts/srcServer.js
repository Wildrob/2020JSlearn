import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

//notes 8th Aug2020 - 

const port = 2000;
const app = express();  //creates an instance of express
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));


app.get('/', function(req,res)
  {
  res.sendFile(path.join(__dirname, '../src/index.html'));
      //__dirname - gives you the directory we are in
      //within src is where we will place our index.html file
  })


  app.get('/users', function(req,res)
  {
    res.json([
      {"id": 1,"firthName":"BoB","lastName":"Smith","email":"bob@gamil.com"},
      {"id": 2,"firthName":"Tammy","lastName":"Norton","email":"tNorton@yaho.com"},
      {"id": 3,"firthName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
    ]);

  })



app.listen(port, function(err) {
  if(err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }

});
